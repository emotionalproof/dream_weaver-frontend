import React, { useState, useEffect } from "react";

import * as synth from "state-speech-synth";

const SpeechSynthesis = props => {
    const PlayButton = ({ paused, text }) => (
        <button onClick={paused ? synth.resume : () => synth.speak(text)}>
        {paused ? "Resume" : "Play"}
        </button>
    );
    
    const PauseButton = () => <button onClick={synth.pause}>Pause</button>;
    
    const StopButton = () => <button onClick={synth.cancel}>Stop</button>;
    
    const useSynthState = () => {
        const [synthState, setSynthState] = useState(synth.IDLE);
        useEffect(() => synth.onStateChange(setSynthState), []);
        return synthState;
    };
    
    const synthStateMap = {
        [synth.PROCESSING]: () => "Processing",
        [synth.IDLE]: textInput => <PlayButton text={textInput} />,
        [synth.PLAYING]: () => [<PauseButton />, <StopButton />],
        [synth.PAUSED]: () => [<PlayButton paused />, <StopButton />]
    };
    
    const SpeechControls = ({ speechSynthState, textInput }) =>
        synthStateMap[speechSynthState](textInput);

    const synthState = useSynthState();


    return (
        <>
            <SpeechControls key={props.id} speechSynthState={synthState} textInput={props.text} />
        </>
    )
}

export default SpeechSynthesis
