import ReactCardFlip from "react-card-flip";
import SlidCard from "../../model/SlidCard";
import { useToPng } from "@hugocxl/react-to-image";
import { useEffect, useState } from "react";
import CardPortal from "./CardPortal";

export default function CardDisplay(props: {
    card: SlidCard
    isFlipped: boolean
    profileSrc?: string
    style?: React.CSSProperties
}) {

    const { card, isFlipped, profileSrc, style } = props

    const [backSrc, setBackSrc] = useState("")
    const [frontSrc, setFrontSrc] = useState("")
    const [_, convertFront, frontRef] = useToPng<HTMLDivElement>({
        quality: 0.8,
        onSuccess: setFrontSrc
    });
    const [__, convertBack, backRef] = useToPng<HTMLDivElement>({
        quality: 0.8,
        onSuccess: setBackSrc
    });

    useEffect(() => {

        const handler = setTimeout(() => {
            const updatePreview = async () => {
                // wait for layout/DOM render
                await new Promise((res) => requestAnimationFrame(res));
                convertFront();
                convertBack()
            };

            updatePreview();
        }, 250); // 1-second debounce

        return () => clearTimeout(handler);
    }, [card, profileSrc]);

    return <>
        <CardPortal backRef={backRef} card={card} frontRef={frontRef} profileSrc={profileSrc} />
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <img src={frontSrc} style={style} />
            <img src={backSrc} style={style} />
        </ReactCardFlip>
    </>
}