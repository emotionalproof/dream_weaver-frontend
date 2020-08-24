import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button, Divider, Transition} from 'semantic-ui-react'


const SpeechKit = props => {
    const [text, setText] = useState(props.text);
    const [pitch, setPitch] = useState(1.1);
    const [rate, setRate] = useState(0.9);
    const [voiceIndex, setVoiceIndex] = useState(10);
    const onEnd = () => {
        // You could do something here after speaking has finished
    };
    const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
        onEnd,
    });

    const voice = voices[voiceIndex] || null;

    const styleFlexRow = { display: 'flex', flexDirection: 'row' };
    const styleContainerRatePitch = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 12,
    };

    const getRandomInt = () => {
        return Math.floor(Math.random() * Math.floor(1000));
    }

    

    return (
        <>
            {speaking ? (
              <Button type="button" onClick={cancel}>
                Stop Listening
              </Button>
            ) : (
              <Button
                inverted
                type="button"
                onClick={() => speak({ text, voice, rate, pitch })}
              >
                Listen to your Dream...
              </Button>
            )}
        </>
    );
}

export default SpeechKit