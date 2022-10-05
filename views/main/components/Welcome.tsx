import * as React from "react" 

interface WelcomeProps {
    occurences: number;
}

export default function Welcome({
    occurences
}: WelcomeProps) {
    return <>On vous souhaite {occurences} fois bienvenue !</>
}