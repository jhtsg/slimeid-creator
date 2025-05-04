import { Card } from "@mui/material";
import SlidCard from "../../model/SlidCard";
import QRCode from "react-qr-code";
// @ts-ignore
import generateBarcode from "pdf417";
import { useEffect, useState } from "react";

export default function CardBack(props: { card: SlidCard, hidden?: boolean, isFlipped?: boolean }) {

    const { card, hidden, isFlipped } = props;

    const [barcodeSrc, setBarcodeSrc] = useState('');

    useEffect(() => {

        if (!barcodeSrc || barcodeSrc.length === 0 || isFlipped) {
            const barcode = generateBarcode(JSON.stringify(card), 4, 4);
            setBarcodeSrc(barcode);
            return;
        }

        const handler = setTimeout(() => {
            const barcode = generateBarcode(JSON.stringify(card), 4, 4);
            setBarcodeSrc(barcode);
        }, 1000); // 1-second debounce

        return () => clearTimeout(handler); // clear on card change
    }, [card]);

    return <Card >
        <div style={{ backgroundColor: 'white', borderRadius: '10px', width: '1035px', height: '660px', display: 'flex', flexDirection: 'column', fontFamily: 'Arial' }}>
            {!hidden && <div style={{ height: '375px', flexShrink: '0' }}>

                {card.showPdf417 ? <>
                    <img src={barcodeSrc} style={{ width: '100%', height: '100%', padding: '30px' }} />
                </> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', gap: '50px' }}>

                    {card.showQrCode && <QRCode value={window.location.href} style={{ width: '256px' }} />}
                    {card.showCustomQRCode && <QRCode value={card.customQRCodeText} style={{ width: '256px' }} />}
                </div>}

            </div>}
            <div style={{ flex: 1, display: 'flex', color: '#222' }}>
                <div style={{ flex: '1', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px 30px' }}>
                    <div>
                        <b>Endorsements:</b> {card.endorsements.length === 0 ? "None" : card.endorsements.join(", ")}
                    </div>
                    <div>
                        <b>Restrictions:</b> {card.restrictions.length === 0 ? "None" : card.restrictions.join(", ")}
                    </div>
                </div>
                <div style={{ flexShrink: '0', height: '236px', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', paddingRight: '50px', gap: "30px" }}>
                    {(!card.showCustomQRCode || !card.showPdf417) && <img src="/tsg.png" style={{ height: '128px' }} />}
                    {card.showPdf417 && card.showQrCode && <QRCode value={window.location.href} style={{ width: '128px' }} />}
                    {card.showPdf417 && card.showCustomQRCode && <QRCode value={card.customQRCodeText} style={{ width: '128px' }} />}
                </div>
            </div>
            <div style={{ color: "#555", marginBottom: '20px', padding: '0px 30px 20px 30px', flexShrink: '0', marginTop: '-20px' }}>
                <div><b>Not a government-issued ID: </b>This is a fictional identification card.</div>
                <div style={{ fontSize: '.9em' }}>Emoji artwork (if present) © Twemoji by Twitter, licensed under MIT License.</div>
            </div>
        </div>
    </Card>
}