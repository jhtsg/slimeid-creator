import CoreType from "./CoreType";

export default class SlidCard {

    /**The unique identifier for the slime*/
    public specimenId: Number = 0;

    /**The name of the slime, which can be a common name or a scientific name*/
    public name: string = "";

    /**Color of the card's header*/
    public cardHeaderColor: string = "";

    /**Card pattern*/
    public cardPattern: string = "";

    /**Show SI Logo on the front of the card*/
    public useMonochromeSiLogo: boolean = false;

    /**The color of the slime, which can be a single color or a combination of colors*/
    public color: string = "";

    /**Volume of goo mass (excluding core) the slime is in control over */
    public totalVolume: Number = 0;

    //Type of a slime's core, which can be a sphere, cube, or other shapes
    public coreType: CoreType | undefined = undefined;

    /** Diameter (or width) of a core in centimiters*/
    public coreSize: number = 0;

    /** Height of a core (for irregular shapes) */
    public coreHeight: number = 0;

    /**Description of the core of the slime (eg "L-S" for Large Spherical)*/
    public coreDescCode: string = "";

    /**The date the slime was created or discovered*/
    public dateOfSpecimen: string = "";

    /**Origin of the slime, either from an experiment, an existing slime, or unknown*/
    public origin: string = "";

    /**Amount of nutritious fluid ingested daily in liters.
     * 
     * NOTE: For slimes that were never in containment, this should be undefined
    */
    public dailyIntake: Number | undefined = undefined;

    /**Amount of waste produced daily in liters
     * 
     * NOTE: For slimes that were never in containment, this should be undefined
     */
    public dailyOutput: Number | undefined = undefined;

    /**Typical Height of the slime in centimiters */
    public typicalHeight: number = 0;

    /**Typical visual appearance of a slime */
    public visualDescription: string = "";

    /**Species the slime usually presents as*/
    public presentingSpecies: string = "";

    /**Presenting Gender*/
    public presentingGender: string = "";

    /**SLID's issue date (set by the UI always to today) */
    public issueDate: string = (new Date()).toLocaleDateString()

    public showExpireDate: boolean = false;

    /**Expiration date (optional, will be hidden on UI if needed) */
    public expireDate: string = "";

    /**Boolean to show the barcode along the bottom of the card in the front*/
    public showBarcode: boolean = true;

    /**Override for the barcode text in case the user wants to put something else */
    public barcodeText: string = "";

    /**Boolean to show a QR Code to this generator*/
    public showQrCode: boolean = true;

    /**Show a second QR Code that the user can put some other data into */
    public showCustomQRCode: boolean = false;

    /**The text to show in the custom QR Code */
    public customQRCodeText: string = "";

    /**Indicator to show a PDF*/
    public showPdf417: boolean = true;

    /** Card Variant to be shown on header */
    public badge: string = "";

    public restrictions: string[] = [];
    public endorsements: string[] = [];

    public flag: string = "";

}