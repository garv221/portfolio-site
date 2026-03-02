import React, { useState, useRef, useEffect, useCallback } from 'react';
import './PullCord.css';

interface PullCordProps {
    onToggle: () => void;
    isActive: boolean;
}

const PullCord: React.FC<PullCordProps> = ({ onToggle, isActive }) => {
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const isActiveRef = useRef(isActive);
    const startY = useRef<number>(0);
    const maxDrag = 100; // maximum pull distance down
    const triggerPoint = 60; // distance at which the toggle triggers

    // Keep active state ref up to date for timers
    useEffect(() => {
        isActiveRef.current = isActive;
    }, [isActive]);

    useEffect(() => {
        let inactivityTimer: NodeJS.Timeout;
        let tooltipDurationTimer: NodeJS.Timeout;

        const triggerTooltip = () => {
            if (isActiveRef.current) return;
            setShowTooltip(true);
            clearTimeout(tooltipDurationTimer);
            tooltipDurationTimer = setTimeout(() => {
                setShowTooltip(false);
            }, 3500); // Vanish after 3.5s
        };

        const resetInactivityTimer = () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                triggerTooltip();
            }, 15000); // Show again after 15s of inactivity
        };

        // Show initially after landing
        const initialTimer = setTimeout(() => {
            triggerTooltip();
        }, 1500);

        // Track global user activity
        window.addEventListener('mousemove', resetInactivityTimer);
        window.addEventListener('keydown', resetInactivityTimer);
        window.addEventListener('scroll', resetInactivityTimer);
        window.addEventListener('touchstart', resetInactivityTimer);

        return () => {
            clearTimeout(initialTimer);
            clearTimeout(inactivityTimer);
            clearTimeout(tooltipDurationTimer);
            window.removeEventListener('mousemove', resetInactivityTimer);
            window.removeEventListener('keydown', resetInactivityTimer);
            window.removeEventListener('scroll', resetInactivityTimer);
            window.removeEventListener('touchstart', resetInactivityTimer);
        };
    }, []);

    const handlePointerDown = (e: React.PointerEvent) => {
        e.preventDefault();
        setIsDragging(true);
        setShowTooltip(false); // Hide tooltip when interacted
        startY.current = e.clientY;
    };

    const handlePointerMove = useCallback((e: PointerEvent) => {
        const deltaY = e.clientY - startY.current;
        if (deltaY > 0 && deltaY < maxDrag) {
            setDragOffset(deltaY);
        } else if (deltaY >= maxDrag) {
            setDragOffset(maxDrag);
        }
    }, [maxDrag]);

    const handlePointerUp = useCallback((e: PointerEvent) => {
        setIsDragging(false);
        setDragOffset((currentOffset) => {
            if (currentOffset > triggerPoint) {
                onToggle();
            }
            return 0;
        });
    }, [onToggle, triggerPoint]);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('pointerup', handlePointerUp);
        } else {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        }

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [isDragging, handlePointerMove, handlePointerUp]);

    return (
        <div
            className={`pull-cord-container ${isActive ? 'active' : ''} ${isDragging ? 'dragging' : ''}`}
            style={{ '--drag-offset': `${dragOffset}px` } as React.CSSProperties}
            onPointerDown={handlePointerDown}
        >
            <div className={`pull-cord-tooltip ${showTooltip && !isActive ? 'visible' : ''}`}>
                Too bright? Pull for dark mode
            </div>
            <div className="pull-cord"></div>
            <div className="pull-handle"></div>
        </div>
    );
};

export default PullCord;
