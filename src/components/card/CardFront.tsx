import { Card } from "@mui/material";
import SlidCard from "../../model/SlidCard";
import { isColorBright } from "../../utils/isColorBright";
import { Paterns } from "../../model/Paterns";
import RenderCore from "../shared/RenderCore";
import { useBarcode } from "next-barcode";
import TwemojiText from "../shared/TwemojiText";
import { RefObject } from "react";

export default function CardFront(props: { card: SlidCard, profileSrc?: string, ref?: RefObject<HTMLDivElement> }) {

    const { card, profileSrc } = props;

    const isBright = isColorBright(card.cardHeaderColor)

    const { inputRef } = useBarcode({
        value: `SLIDV1|${card.specimenId}|${card.name}`,
        options: {
            displayValue: false, height: 256, width: 9,
            background: 'rgba(0,0,0,0)',
        }
    });


    const blueLabel = '#111177';
    const coreSizeCode = () => {
        const dimension = Math.max(card.coreSize, (card.coreType?.hasHeight ? card.coreHeight : 0))
        return dimension > 13 ? "XL" : dimension > 8 ? "L" : dimension > 4 ? "M" : dimension > 1 ? "S" : "XS"
    }

    return <Card>
        <div ref={props.ref} style={{ backgroundColor: 'white', borderRadius: '10px', width: '1035px', height: '660px', display: 'flex', flexDirection: 'column' }}>
            <div style={{
                height: "150px", width: '100%',
                backgroundColor: card.cardHeaderColor,
                color: isBright ? 'black' : 'white',
                backgroundImage: Paterns.find(a => a.code === card.cardPattern)?.backgroundImage,
                display: 'flex', alignItems: 'center', gap: '20px', paddingLeft: '40px'
            }}>
                <div>
                    <img src={card.useMonochromeSiLogo ? `/sitrans${isBright ? "dark" : "white"}.png` : "/sitight.png"} style={{ height: '80px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Orbitron' }}>
                    <div style={{ fontSize: '2.75em', fontWeight: '500' }}>SLID</div>
                    <hr style={{ height: '70px' }} />
                    <div style={{ fontSize: '.9em' }}>
                        <div>Slime Institute</div>
                        <div>Specimen Identification Card</div>
                    </div>
                </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexShrink: '0', flexDirection: 'column' }}>
                <div style={{ flex: 1, display: 'flex', flexShrink: '0' }}>
                    <div style={{ width: '300px', height: '100%', display: 'flex', flexDirection: 'column', flexShrink: '0' }}>

                        {/* ZONE II */}
                        <div style={{ height: '295px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={profileSrc ?? "/defaultPerson.png"} style={{ width: '256px', height: '256px', borderRadius: '10px', objectFit: 'cover' }} />
                        </div>

                        {/* ZONE III */}
                        <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                            <RenderCore core={card.coreType} height={card.coreHeight} width={card.coreSize} />
                        </div>
                    </div>
                    <div style={{ flex: 1, flexShrink: 0, height: '100%', color: 'black', paddingTop: '20px', paddingRight: '80px', paddingLeft: '10px', fontFamily: 'Arial', display: 'flex', flexDirection: 'column', paddingBottom: "20px" }}>
                        <div style={{ flex: 1, display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                            <div style={{ flex: '1' }}>
                                <div><span style={{ color: blueLabel, fontWeight: '800' }}>ID No.</span> {card.specimenId + ""}</div>
                                <div style={{ marginBottom: '60px', marginTop: '40px', height: '75px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                    <div style={{ fontWeight: '800', fontSize: '2rem', marginBottom: '-10px' }}>{card.name.split(' ')[0]}</div>
                                    <div style={{ fontWeight: '800', fontSize: '1.5rem' }}>{card.name.split(' ').splice(1).join(" ")}</div>
                                </div>
                                <div style={{ display: 'flex', gap: '30px', marginBottom: '20px' }}>
                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Color</div>
                                        <div>{card.color}</div>
                                    </div>
                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Vol</div>
                                        <div>{card.totalVolume + ""}L</div>
                                    </div>
                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Hgt</div>
                                        <div>{card.typicalHeight}cm</div>
                                    </div>
                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Gend</div>
                                        <div>{card.presentingGender}</div>
                                    </div>
                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Spcs</div>
                                        <div>{card.presentingSpecies}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <div style={{ color: blueLabel, fontWeight: '800' }}>Visual Desc</div>
                                    <div style={{ height: '50px', flex: 1 }}>{card.visualDescription}</div>
                                </div>
                                <div style={{ flex: '1', display: 'flex', gap: '30px', marginBottom: '20px' }}>
                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Core Type</div>
                                        <div>{card.coreType && <>{card.coreType.code === "NON" ? "N/A" : <div>{card.coreType?.code}-{coreSizeCode()}</div>}</>}</div>
                                    </div>
                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Intake</div>
                                        <div>{card.dailyIntake ? card.dailyIntake + "L" : "N/A"}</div>
                                    </div>
                                    <div>
                                        <div style={{ color: blueLabel, fontWeight: '800' }}>Output</div>
                                        <div>{card.dailyOutput ? card.dailyOutput + "L" : "N/A"}</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '150px', flexShrink: 0 }}>
                                <div><div style={{ color: blueLabel, fontWeight: '800' }}>Iss</div> {card.issueDate}</div>
                                {card.showExpireDate && <div><div style={{ color: blueLabel, fontWeight: '800' }}>Exp</div> {card.expireDate}</div>}
                                <div style={{ color: '#771111', fontWeight: '800' }}><div style={{ color: blueLabel, fontWeight: '800' }}>DOS:</div>{card.dateOfSpecimen}</div>
                                <div><div style={{ color: blueLabel, fontWeight: '800' }}>Origin:</div>{card.origin}</div>
                                <div style={{ flex: '0', display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                    {card.flag && card.flag.length > 0 && <div style={{ fontSize: '5em' }}><TwemojiText text={card.flag} /></div>}
                                </div>
                            </div>
                        </div>

                        <div>
                            {card.showBarcode && <img ref={inputRef} style={{ width: "100%", height: '64px' }} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Card>
}