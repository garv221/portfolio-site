import React from 'react';
import './SpotlightOverlay.css';

interface SpotlightOverlayProps {
    x: number;
    y: number;
    isActive: boolean;
}

const SpotlightOverlay: React.FC<SpotlightOverlayProps> = ({ x, y, isActive }) => {
    if (!isActive) return null;

    return (
        <div
            className="spotlight-overlay"
            style={
                {
                    '--x': `${x}px`,
                    '--y': `${y}px`,
                } as React.CSSProperties
            }
        />
    );
};

export default SpotlightOverlay;
