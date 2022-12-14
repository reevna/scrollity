import {Presentation, GraphicObject, ImageBlock, Block, Slide, SlideBackground, TextBlock} from "./types_v2";

const textBlock: TextBlock = {
    type: 'text',
    chars: 'my super text',
    fontSize: 12,
    fontFamily: 'roboto',
    color: '#ffffff'
}

const imageBlock: ImageBlock = {
    type: 'image',
    imageResource: '/images/...'
}

const graphicBlock: GraphicObject = {
    type: 'figure',
    colorBorder: '#ff00ff',
    colorBackground: '#295d2b',
    figureType: 'rectangle',
}

const graphicBlock2: GraphicObject = {
    type: 'figure',
    colorBorder: '#ff00ff',
    colorBackground: '#295d2b',
    figureType: 'triangle',
}

const graphicBlock3: GraphicObject = {
    type: 'figure',
    colorBorder: '#ff00ff',
    colorBackground: '#295d2b',
    figureType: 'circle',
}

const block1: Block = {
    id: '1',
    x: 30.0,
    y: 50.0,
    width: 20.0,
    height: 30.0,
    isSelected: false,
    blockType: graphicBlock
}

const block2: Block = {
    id: '2',
    x: 30.0,
    y: 50.0,
    width: 20.0,
    height: 30.0,
    isSelected: true,
    blockType: graphicBlock2
}

const block3: Block = {
    id: '3',
    x: 30.0,
    y: 50.0,
    width: 20.0,
    height: 30.0,
    isSelected: true,
    blockType: graphicBlock3
}

const block4: Block = {
    id: '4',
    x: 30.0,
    y: 50.0,
    width: 20.0,
    height: 30.0,
    isSelected: true,
    blockType: imageBlock
}

const block5: Block = {
    id: '5',
    x: 30.0,
    y: 50.0,
    width: 20.0,
    height: 30.0,
    isSelected: true,
    blockType: textBlock
}

const slideBackground: SlideBackground = {
    type: 'image',
    data: 'BASE64_ENCODING_IMAGE'
}

const slide: Slide = {
    id: '1',
    data: [block1, block2, block3, block4, block5],
    background: slideBackground,
}

// const presentation: Presentation = {
//     name: 'name',
//     slides: [slide],
//     selectedSlides: [
//         [
//             'slideId1',
//             [
//                 'blockId1',
//                 'blockId2'
//             ]
//         ],
//         [
//             'slideId3',
//             [
//                 'blockId1',
//                 'blockId4'
//             ]
//         ],
//     ]
// }

const presentation: Presentation = {
    name: 'name',
    slides: [slide],
    selectedSlides: [
        {
            selectedSlideId: 'slideId1',
            selectedBlocksId: [
                'blockId1',
                'blockId2'
            ]
        },
        {
            selectedSlideId: 'slideId3',
            selectedBlocksId: [
                'blockId1',
                'blockId2'
            ]
        },
    ]
}

const ?????????????? ???????????? ?? ?????????????? ?????????? ?????????????????????????????????? ??????????







function createPresentation(): Presentation{
    return {
        newPresentation
    }
}

function namePresentation(name: string){}

function renamePresentation(newName: string) {}
function openPresentation(): Presentation {}
function save(presentation: Presentation) {}
function exportPdf(presentation: Presentation) {}
function previewPresentation(presentation: Presentation): ConvertedPresentation {}

// ?????????????? ?????? ???????????? ?? ?????????????????? ?? ?????????????????? ??????????   (type Text) ???? ???? ?????????????? ???? ???????????? ??????????????

function addTextChar(input ?? ????????????????????, ?????????????? ???????????? ?? ???????? ????????????????): Presentation {
    return {
        arrangeBlockLayer  ???
        ???????????????????? ???????????? ?? chars ?? ?????????? char
}
}

function deleteTextChar(?????????????????? ????????, ?????????????????? ?????????????? ???????????? ???????????????? ?????????????? + ?????????????? backspace? , ): Presentation {
    return {
        ???????????????????? ???????????? ?? chars.filter((_, _index) => _index != index)
    }
}

function copyTextChar(?????????????????? ????????, ?????????????????? ?????????????? ???????????? ???????????????? ?????????????? + ?????????????? ctrl+c ? , ): Presentation {
    return {
        ?????????????????? ???????????? ?? ????????
    }
}

function pasteTextChar(?????????????????? ????????, ?????????????????? ?????????????? ???????????? ???????????????? ?????????????? + ?????????????? ctrl+v ? , ): Presentation {
    return {
        ?????????????? ???????????? ???? ?????????? ?? ?????????????????? ?????? ?????????? ????????????????
    }
}


// ?????????????? ?????? ???????????? ?? ???????????? ???????????? ?? ?????????????????? ??????????   (type TextBlock)
//for font style

function changeFontStyle(presentation: Presentation, blockId:string, fontStyle:string): Presentation {
    let chosenfontStyle = document.getElementById("chosenfontStyle");
    // ?????????????????? ???????????????? ?? ?????????????? , ???????????????? ???? onMouseClick 
    let currentStyle = document.getElementById(TextBlock);
    let newFontStyle;
    //for bold
    if (chosenfontStyle == 'bold') 
    {
        if (currentStyle == 'bold')
            {
                newFontStyle = 'normal';
            }
        else
           newFontStyle = 'bold';
    }
    //for italic
    else if (chosenfontStyle == 'italic') 
    {
        if (currentStyle == 'italic')
        {
            newFontStyle = 'normal';
        }
        else
        {
            newFontStyle = 'italic';
        }
    }
    //for underline
    else if (chosenfontStyle =='underline')
    {
        if (newFontStyle == 'underline')
        {
            newFontStyle = 'none';
        }
        else
        {
            newFontStyle = 'underline';
        }
    }

    const newTextBlock = {
        fontStyle: newFontStyle,
    } 
    return {
        ...presentation,
        ...blocks,   //?????????????????? ?????????? 
        newTextBlock
    }
}


//for font size
function ChangeFontSize(presentation: Presentation, blockId:string, fontSize:number): Presentation {
    let currentFontSize = document.getElementById(TextBlock);
 // ?????????????????? ???????????????? ?? ?????????????????????? ???????????? ?????? ???????????????? ???? onMouseClick 
    let chosenfontSize = document.getElementById("chosenfontSize");
    let newFontSize;
    newFontSize = chosenfontSize + "px";
    
    const newTextBlock = {
        fontSize: newFontSize,
    } 
    return {
        ...presentation,
        ...blocks,   //?????????????????? ?????????? 
        newTextBlock
    }
}



function ChangeFontFamily(presentation: Presentation, blockId:string, fontFamily: string): Presentation {
   // ?????????????????? ???????????????? ?? ?????????????????????? ???????????? ?? ?????????? ???????????? font-family
   let chosenfontFamily = document.getElementById("chosenfontFamily");
   let value=chosenfontFamily.value; 
   let newFontFamily;
    if(value==1){
        newFontFamily = "Times New Roman";
    }
    if(value==2){
        newFontFamily = "Arial";
    }
    if(value==3){
        newFontFamily = "Verdana, Geneva, sans-serif";
    }

    const newTextBlock = {
        fontFamily: newFontFamily,
    } 
    return {
        ...presentation,
        ...blocks,   //?????????????????? ?????????? 
        newTextBlock
    }
}


function ChangeFontColor(presentation: Presentation, blockId:string, fontColor: string): Presentation {
   // ?????????????????? ???????????????? ?? ?????????????????????? ???????????? ?? ??????????????
   let chosenfontColor = document.getElementById("chosenfontColor");
   let value=chosenfontColor.value; 
   let newFontColor;
    if(value==1){
        newFontColor = "red";
    }
    if(value==2){
        newFontColor = "blue";
    }
    if(value==3){
        newFontColor = "green";
    }
    if(value==4){
        newFontColor = "black";
    }
    if(value==5){
        newFontColor = "yellow";
    }
    if(value==6){
        newFontColor = "white";
    }

    const newTextBlock = {
        fontColor: newFontColor,
    } 
    return {
        ...presentation,
        ...blocks,   //?????????????????? ?????????? 
        newTextBlock
    }
}



// ?????????????? ?????? ???????????? ?? ?????????????????????? ????????????????   (type GraphicObject)

// ???????? ???? ?????????????????? ?? ???????????? ??????????
// ?????????????? ?????????????????? ?? ???????????????????? ?????????????????? ?? ???????????? ?? ?????????? ????????????
function insertTriangle(slideId: string): Presentation {
    return {}
}

// , ???????? ???? ?????????? ?? ???????????? ??????????
//?????????????? ?????????? ?? ???????????????????? ?????????????????? ?? ???????????? ?? ?????????? ????????????
function insertCircle(slideId: string): Presentation {
    // ?????????????? ?????????? ????????
    // ???????????????? arrangeBlockLayer()
    return {}
}

//, ???????? ???? ???????????????????????????? ?? ???????????? ??????????
//?????????????? ???????????????????????????? ?? ???????????????????? ?????????????????? ?? ???????????? ?? ?????????? ????????????
function insertRectangle(slideId: string): Presentation {
    return {}
}

// ?????????????? ????????? ???? ???????????????????? ?????????? ???? ???????????? ??????????????????????????
function setFillColor(blockId: string, color: string): Presentation { // ?????? ?????????? ????????????????????: ???????? ?????? ??????????? ?? ?? ?????????? ???????????? ?????????? ?????????????????????? ???????????????????? ???????????????? ????????????. PageSlide - ???? ???????????????????? ???????????? ?????? ???????????????????? ?????????? ????????????????. ?????????? ????????????????
    return {
        ?????????????????? figure ?? ?????????? ??????????
    }
}

function setBorderColor(blockId: string, borderColor: string): Presentation {
    return {
        ?????????????????? figure ?? ?????????? ????????????
        ???????????????????? bordercolor ?? css
    }
}

function scale(blockId: string, newX: number, newY: number): Presentation {
    return {
        ????????, ???????????????????????? ??????????????
        ???????? left mouseUp ?????????????? ???? ?????????????? ???????????? - ?????????????????????? ???????????????? ???? ??????????????????
    }
}


// ?????????????? ?????? ???????????? ?? Image   (type ImageBlock)
// ?????????????? ???????? ????????????????,
function uploadFromPC (imagePath: string): Presentation {
    return {}
}

// ?????????????? ???????????????? ???????? - left mouseDown ???? left mouseUp ???????? ???? ?? ???????????????? ????????????
//????????, ????????????????????????/???????????????????????? ??????????????
//         ???????? left mouseUp ?????????????? ???? ?????????????? ???????????? - ?????????????????????? ???????????????? ???? ??????????????????
function scaleFigure(blockId: string): Presentation | null { // ?????????? ???????????????????? null, ???????? ?????????????????? ???? ????????
    return {

    }
}



// ?????????????? ?????? ???????????? ?? BLOCK   (type Block)



function deleteBlock(selectableBlock: Selection): Presentation {
    return {
        ...blocks,
        page: page.blocks.filter((_, _index) => _index != index)
    }
}

// copy paste - ?????????? ???????? ?????????? ???? ?????????? ??????????????????????????, ???? ?????????? ?????? ????????????????, ?????? ???????????????? ?? ?? ?????????? ?????????? ?????????????? ?????????? ???????? ????????????????????????.
// function copy(selectableBlock: Selection): Presentation {
//     return {
//         push stack ? ?????? ???????? ?? ????????? ???????????????????? ?????? ID ???????????
//     }
// }

// function paste(copiedObjects: CopiedObjects): Presentation {
//     return {
//         add block ???? ?????????? ?? ?????????????????? ?????? ?????????? id
//     }
// }

function moveBlock(presentation: Presentation, selection: {  }, newX: number, newY: number): Presentation {

    return {
    //     ?????????????????? ??????????????????:
    // ?????? ?????????? - ?????????????????????? ??????????
    // ?????? ????????????/????????????????/????????????????????????/???????????????????????????? ? ?????? ??????????, ???????? ?????????????? ???? ?????????????? ??????????????
}
}


function selectBlock(blockId: string): Presentation {
    return {
        ???????? ?? ???????????????????? ???????????????? (set bordercolor)
}
}

function scaleBlock(blockId: string): Presentation | null { // ?????????? ???????????????????? null, ???????? ?????????????????? ???? ????????
    return {

    }
}

// ?????? ???????????? ???? ???????????? ???????????? - ???? ???????????????? ????????, ???? ???????????? ????????
?? ?????? ???????????? z-index ?? ???? ?????????? ???????? ?????????????????? z-index ?? ???????? ?? ?????????? ????????????

// , ???????????? z-index 0 ?????? 1???? ??????????, ?????? ?????????????????????? ???????????????????????????? +1
function arrangeBlockLayer (newBlock: Block): Presentation {
    return [];
}

//???????? ???? ???????????? ???????????????? ????????  - ???????????????????? z-index
function changeBlockTopLayer (blockId: string, selectedObjects: Selection, orderArrangement: OrderArrangement): Presentation

// ???????????????? ?????? ????????????????
function animation(????????, ???????? ???? ???????????? ???????????????? ?? ???????????? ????????????????????????): Presentation {
    return {
        ???????? ?? ???????????????????? ?????????????????? ?????? ???????????? ?
    }
}


// ??????????

function addSlide(presentation: Presentation, index: number): Presentation { // ???????????? ???? ???????????? index?
    const newSlide: Slide = { // ?? id ?????????? ?????????????????????????? ????????????????
        id: 'id',
        data: [],
        background: {
            type: 'color',
            data: '#ffffff'
        }
    };

    // let newSlides: Array<Slide> = [...presentation.slides]

    // if (index == presentation.slides.length) {
    //     newSlides.push(newSlide)
    // } else {
    //     newSlides.splice(index, 0, newSlide)
    // }

    const oldSlides = [...presentation.slides];
    const newSlides: Array<Slide> = presentation.slides.length === index // ?? ?????? ?????????????? ?????????? ?????????????? ?????????????????? ???????????????? ?????????????
        ? [...presentation.slides, newSlide]
        : oldSlides.splice(index, 0, newSlide); 

    return {
        ...presentation,
        slides: newSlides
    }
}


function deleteSlides(presentation: Presentation, indexesToDelete: Array<number>): Presentation { // ?????????? ???? ???????????????? ?????? ???? id?
    const newSlides = presentation.slides.filter((slide: Slide, _index: number) =>   // ?????? ???????? ???????????? ???????????????????????????
        indexesToDelete.indexOf(_index) >= 0)

    return {
        ...doc,
        slides: doc.slides.filter((_, _index) => _index != index)
    }
}

// copy paste
function copySlide(doc: Presentation, index: number): Presentation {
    return {
        ...doc,
        ?????????? ?? ???????????
}
}

function pasteSlide(???????????? ??????????, index: number, ?????????????????? ?????????? ?????????????????????? ???????????? ?????????????? ???? ???????????? ???????????????????????? ): Presentation {
    return {
        ...doc,
        ?????????? ???? ????????????? ?????????????????? ?????????? id ?? ?????????? ???????????????????? ?????????? ( ???????????????????? ???????????????????)
}
}


function move(slideId: string): Presentation {
    return {
        ?????????????????? ?????????????????????? ???????????? ???????????? ( ???????????????????? ???????????????????)
    ?????????????????? ????????????????????  ?????????????? ?????????????????? ?????????????? (????, ?????? ????????)
}
}




/////////////////// ?????????????? ????????????

// ?????????????? ???????????? ???????????? ?????????????????? ?? ????????????
function select(???????????? ??????????, ???????????? ?????????????? ???????????????????? Up Down ): Presentation {
    return {
        ?????????? ?? ???????????????????? ???????????????? ?? ???????????? (set bordercolor)
    ?????????????????? ?????????? ???????????? ???????????????????????? ???? ???????????? ???? ?????????????????? ?????????? (???? id)
}
}

??//function selectSeveral(???????????? ????????????): Slide {
???????? ?????????? ctrl ?? ???????? leftMouse ???? ????????????
return {
    ???????????? ?? ???????????????????? ???????????????? ?? ???????????? (set bordercolor)
}
}


function preview ?????? ?????????????? ???????????? (???????????? ????????????): Slide {
    return {
        ?????????????????? ??????????????
    }
}