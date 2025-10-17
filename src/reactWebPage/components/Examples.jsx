import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState('components');
    let tabContent = 'Please click a button';

    function handleSelect(selectedButton) {
        tabContent = selectedButton;
        console.log(selectedButton);
    }

    return (     <Section title="Examples" id="examples">
        <Tabs

            buttons={<>
            <TabButton isSelected={setSelectedTopic==='components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={setSelectedTopic==='jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={setSelectedTopic==='props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={setSelectedTopic==='state'} onClick={() => handleSelect('state')}>State</TabButton>
        </>}>{tabContent}</Tabs>
        <menu>


        </menu>


    </Section>);
}