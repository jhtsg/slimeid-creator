import { Card } from "@mui/material";
import SlidCard from "../../model/SlidCard";
import { isColorBright } from "../../utils/isColorBright";
import { Paterns } from "../../model/Paterns";
import RenderCore from "../shared/RenderCore";
import { useBarcode } from "next-barcode";
import TwemojiText from "../shared/TwemojiText";
import { RefObject } from "react";
import { HelpOutlineOutlined } from "@mui/icons-material";

export default function CardFront(props: { card: SlidCard, profileSrc?: string, ref?: RefObject<HTMLDivElement> }) {

    const { card, profileSrc } = props;

    const isBright = isColorBright(card.cardHeaderColor)

    // const { inputRef } = useBarcode({
    //     value: `SLIDV1|${card.specimenId}|${card.name}`,
    //     options: {
    //         displayValue: false, height: 256, width: 9,
    //         background: 'rgba(0,0,0,0)',
    //     }
    // });


    const blueLabel = '#111177';
    const coreSizeCode = () => {
        const dimension = Math.max(card.coreSize, (card.coreType?.hasHeight ? card.coreHeight : 0))
        return dimension > 13 ? "XL" : dimension > 8 ? "L" : dimension > 4 ? "M" : dimension > 1 ? "S" : "XS"
    }

    const waveBackground = {
        backgroundImage: `
          radial-gradient(17.82px at 50% calc(100% + 14.8px), rgba(0, 0, 0, 0) calc(99% - 2px), rgba(0,0,0,.1) calc(101% - 2px) 99%, rgba(0, 0, 0, 0) 101%),
          radial-gradient(17.82px at 50% -14.8px, rgba(0, 0, 0, 0) calc(99% - 2px), rgba(0,0,0,.1) calc(101% - 2px) 99%, rgba(0, 0, 0, 0) 101%)
        `,
        backgroundSize: '32px 10px',
        backgroundPosition: 'calc(50% - 16px) calc(50% - 5px + 0.5px), 50% calc(50% + 5px)',
        backgroundRepeat: 'repeat',
    };

    return <Card>
        <div ref={props.ref} style={{ backgroundColor: 'white', borderRadius: '10px', width: '1035px', height: '660px', display: 'flex', flexDirection: 'column' }}>

            <div id="cardHeader" style={{
                height: "150px", width: '100%', flexShrink: '0',
                backgroundColor: card.cardHeaderColor,
                color: isBright ? 'black' : 'white',
                backgroundImage: Paterns.find(a => a.code === card.cardPattern)?.backgroundImage,
                display: 'flex', alignItems: 'center', gap: '20px', paddingLeft: '40px', paddingRight: '40px'
            }}>
                <div id="cardSiLogo">
                    <img src={card.useMonochromeSiLogo ? `/sitrans${isBright ? "dark" : "white"}.png` : "/sitight.png"} style={{ height: '80px' }} />
                </div>
                <div id="cardSlidTitle" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Orbitron' }}>
                    <div style={{ fontSize: '2.75em', fontWeight: '500' }}>SLID</div>
                    <hr style={{ height: '70px' }} />
                    <div style={{ fontSize: '.9em' }}>
                        <div>Slime Institute</div>
                        <div>Specimen Identification Card</div>
                    </div>
                </div>
                <div id="cardVariant" style={{ flex: "1", display: "flex", justifyContent: 'flex-end', fontFamily: 'Orbitron', fontSize: '2em' }}>
                    {card.badge.length > 0 && <div style={{ borderRadius: '3px', borderColor: isBright ? 'black' : 'white', borderStyle: 'solid', borderWidth: '4px', width: "48px", height: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>{card.badge}</div>}
                </div>
            </div>

            <div id="cardBody" style={{
                flex: 1, display: 'flex', flexShrink: '0', flexDirection: 'column',

            }}>
                <div id="cardBodySplit" style={{ flex: 1, display: 'flex', flexShrink: '0', ...waveBackground }}>

                    <div id="cardBodyLeft" style={{ width: '300px', height: '100%', display: 'flex', flexDirection: 'column', flexShrink: '0' }}>

                        <div id="cardPhoto" style={{ height: '295px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={profileSrc ?? "/defaultPerson.png"} style={{ width: '256px', height: '256px', borderRadius: '10px', objectFit: 'cover' }} />
                        </div>

                        <div id="cardCore" style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontWeight: '800', fontSize: '1.3em' }}>
                            <RenderCore core={card.coreType} height={card.coreHeight} width={card.coreSize} />
                        </div>

                    </div>

                    <div id="cardBodyRight" style={{ flex: 1, flexShrink: 0, height: '100%', color: 'black', paddingTop: '20px', paddingRight: '80px', paddingLeft: '10px', fontFamily: 'Arial', display: 'flex', flexDirection: 'column', paddingBottom: "20px", fontWeight: '900' }}>
                        <div id="cardInfo" style={{ flex: 1, display: 'flex', width: '100%', justifyContent: 'space-between' }}>

                            <div id="cardInfoLeft" style={{ flex: '1.5' }}>

                                <div id="cardIdNum" style={{ fontSize: '1.5rem' }}>
                                    <span style={{ color: blueLabel, fontWeight: '800' }}>ID No.</span>
                                    <span style={{ fontWeight: '900' }}>{" " + card.specimenId + ""}</span>
                                </div>

                                <div id="cardName" style={{ marginBottom: '35px', marginTop: '40px', height: '75px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                    <div style={{ fontWeight: '800', fontSize: '2.2rem', marginBottom: '-5px' }}>{card.name.split(' ')[0]}</div>
                                    <div style={{ fontWeight: '800', fontSize: '1.5rem' }}>{card.name.split(' ').splice(1).join(" ")}</div>
                                </div>

                            </div>

                            <div id="cardInfoRight" style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px', flexShrink: 0, fontSize: '1.3em' }}>

                                <div id="cardIssueDate" style={{ fontWeight: '800' }}>
                                    <div style={{ color: blueLabel }}>Iss</div>
                                    {card.issueDate}
                                </div>

                                {card.showExpireDate && <div id="cardExpirationDate" style={{ fontWeight: '800' }}>
                                    <div style={{ color: blueLabel, }}>Exp</div>
                                    {card.expireDate}
                                </div>}

                                <div id="cardDateOfSpecimen" style={{ color: '#771111', fontWeight: '800' }}>
                                    <div style={{ color: blueLabel }}>DOS:</div>
                                    {card.dateOfSpecimen}
                                </div>


                            </div>
                        </div>
                        <div id="cardHoriz1" style={{ display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '1.3em' }}>

                            <div id="cardHorizInfoGroup1" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>

                                <div>
                                    <div style={{ color: blueLabel, fontWeight: '800' }}>Color</div>
                                    <div>{card.color}</div>
                                </div>
                                <div>
                                    <div style={{ color: blueLabel, fontWeight: '800' }}>Vol</div>
                                    <div>{card.totalVolume + ""}L</div>
                                </div>
                                <div>
                                    <div style={{ color: blueLabel, fontWeight: '800' }}>Core Type</div>
                                    <div>{card.coreType && <>{card.coreType.code === "NON" ? "N/A" : <div>{card.coreType?.code}-{coreSizeCode()}</div>}</>}</div>
                                </div>
                            </div>


                            <div id="cardOrigin" style={{ fontWeight: '800', width: '200px', flexShrink: '0' }}>
                                <div style={{ color: blueLabel }}>Origin:</div>
                                <div style={{ color: '#222' }}>{card.origin}</div>
                            </div>


                        </div>
                        <div id="cardHoriz2" style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.3em' }}>
                            <div>
                                <div id="cardVisualDesc">
                                    <div style={{ color: blueLabel, fontWeight: '800' }}>Visual Desc</div>
                                    <div style={{ height: '50px', flex: 1 }}>{card.visualDescription}</div>
                                </div>

                                <div id="cardHorizInfoGroup2" style={{ flex: '1', display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Gend</div>
                                        <div>{card.presentingGender}</div>
                                    </div>

                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Hgt</div>
                                        <div>{card.typicalHeight}cm</div>
                                    </div>
                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Spcs</div>
                                        <div>{card.presentingSpecies}</div>
                                    </div>

                                </div>

                            </div>
                            <div style={{ width: '200px', flexShrink: '0', fontSize: '5em', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-20px' }}>
                                {card.flag && card.flag.length > 0 && <TwemojiText text={card.flag} />}
                                {/* <HelpOutlineOutlined /> */}
                            </div>

                        </div>


                    </div>
                </div>



            </div>

        </div>
    </Card>
}