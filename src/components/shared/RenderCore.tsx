import CoreType from "../../model/CoreType";
import './cores.css'

export default function RenderCore(props: {
    core?: CoreType
    width: number,
    height: number,
}) {

    const { core, width, height } = props

    const measurmentBorderStyle = '5px solid black';
    return <div style={core?.hasHeight ? {marginLeft:'-35px'} : {}}>
        <table><tbody>
            <tr>
                <td>
                    {core?.hasHeight && <div style={{ marginRight: '2px', writingMode: 'vertical-rl', transform: "rotate(180deg)", width:'20px' }}>{height}cm</div>}
                </td>
                <td style={core?.hasHeight ? { borderTop: measurmentBorderStyle, borderLeft: measurmentBorderStyle, borderBottom: measurmentBorderStyle, width: '15px' } : {}}></td>
                <td><div style={{ aspectRatio: 1, height: '128px' }}><CoreGraphic coreCode={core?.code} /></div></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td style={(core?.widthDimensionName.length ?? 0) === 0 ? {} : { borderLeft: measurmentBorderStyle, borderBottom: measurmentBorderStyle, borderRight: measurmentBorderStyle, height: '15px' }}></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>{(core?.widthDimensionName.length ?? 0) !== 0 && <div style={{ textAlign: 'center' }}>{width}cm</div>}</td>
            </tr>
        </tbody></table>
    </div>



}

function CoreGraphic(props: { coreCode?: string }) {

    const { coreCode } = props

    switch (coreCode) {
        case "SPH":
        case "CUB":
        case "CYL":
        case "RMB":
            return <div className={coreCode.toLowerCase()}/>
            
        case "IRR":
            return <img src="/irregular.png" style={{width:'128px', height:'128px'}}/>
        case "PYR":
            return <img src="/pyramid.png" style={{width:'128px', height:'128px'}}/>
        case "NON":
            return <div style={{display:'flex', height:'100%', alignItems:'center', justifyContent:'center', fontFamily:'Orbitron', fontSize:'10rem', fontWeight:'500'}}>
                X  
            </div>
        case "OTH":
            return <div className={"sph"}>
                <div style={{display:'flex', height:'100%', alignItems:'center', justifyContent:'center', fontFamily:'Orbitron', fontSize:'5rem', fontWeight:'500'}}>
                    ?   
                </div>
            </div>

        default:
            break;
    }

    return <></>

}