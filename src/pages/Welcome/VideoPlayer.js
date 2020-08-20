import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "videojs-plus";
import "videojs-plus/dist/videojs-plus.css";
import Col from 'react-bootstrap/Col'

const defaultPlayerOptions = {
    autoplay: true,
    muted: false,
    aspectRatio: "1:1",
    mobileView: false,
    controls: false,
    loop: true
};

const VideoPlayer = ({children, playerOptions, onPlayerInit, onPlayerDispose}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
        const videoEl = containerRef.current.querySelector("video");
        const player = videojs(videoEl, {
            ...defaultPlayerOptions,
            ...playerOptions
        });

        // used to move children component into player's elment
        // your may not thest script
        const playerEl = player.el();
        const flag = player.getChild("PlayToggleLayer").el();
        for (const child of containerRef.current.children) {
            if (child !== playerEl) {
            playerEl.insertBefore(child, flag);
            }
        }
        // ----
        onPlayerInit && onPlayerInit(player);

        // for debug purpose
        window.player = player;

        return () => {
            onPlayerDispose && onPlayerDispose(null);
            player.dispose();
        };
        }
    }, [onPlayerInit, onPlayerDispose, playerOptions]);

    return (
        <Col md={8} id="video-play-div" className="player video-player" ref={containerRef}>
            <video id="video-tag-box" className="video-box"/>
            {children}
        </Col>
    );
}

export default VideoPlayer

