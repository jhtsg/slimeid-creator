import SlidCard from "../../model/SlidCard";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import ReactDOM from "react-dom";

export default function CardPortal(props: {
    card: SlidCard
    profileSrc?: string
    frontRef: React.LegacyRef<HTMLDivElement>
    backRef: React.LegacyRef<HTMLDivElement>
}) {

    const { backRef, card, frontRef, profileSrc } = props

    return ReactDOM.createPortal(<div style={{ position: 'absolute', top: '-10000px', left: '-10000px' }}>
        <div ref={frontRef}><CardFront card={card} profileSrc={profileSrc} /></div>
        <div ref={backRef}><CardBack card={card} /></div>
    </div>, document.body)

}