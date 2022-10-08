// TO DO:
// 1. Придумать хранение выделенных слайдов и блоков слайда

type TextBlock = {
    type: 'text',
    chars: string,
    fontSize: number,
    fontFamily: string,
    color: string
}

type ImageBlock = {
    type: 'image',
    imageResource: string
}

// type Rectangle = {
//     type: 'rectangle'
//     // width: number, возможно уже определно в сущности Block
//     // height: number,
// }
//
// type Triangle = {
//     type: 'triangle'
// }
//
// type Circle = {
//     type: 'circle'
// }

type GraphicObject = {
    type: 'figure',
    colorBorder: string,
    colorBackground: string,
    figureType: 'circle'|'triangle'|'rectangle',
}

//  Фигуры по умолчанию:
// type figure = {
//     triangle, (три координаты и линии между ними)
//     circle, (координаты точки и радиус)
//     rectangle (4 точки. происать размеры изначальной фигуры)
// }
//
// ?? при создании или клике по блоку запускаем function generateId(напрмиер, по дате с милисекундами)


type Block = {
    id: string,
    x: number, // не совсем понятно, как брать х и у для разных фигур - треуголньик, круг
    y: number, // x, y - координата верхнего левого угла графического объекта. по умолчанию одинаковые для всех объектов
    width: number,
    height: number,
    isSelected: boolean,
    blockType: TextBlock|ImageBlock|GraphicObject
}

type Slide = {
    id: string,
    data: Array<Block>,
    background: ImageBackground | ColorBackground,
}

type ImageBackground = {
    type: 'image',
    base64: string,
}

type ColorBackground = {
    type: 'color',
    color: string,
}

type Presentation = {
    name: string,
    slides: Array<Slide>,
    selectedSlides: Array<Selection>
}

type Selection = {
    selectedSlideId: string,
    selectedBlocksId: Array<string>
}

// type Selection = Array<string> // храним id объектов
// type CopiedObjects = Array<string> // храним id объектов

export {
    Presentation,
    Slide,
    ImageBackground,
    ColorBackground,
    TextBlock,
    ImageBlock,
    GraphicObject,
    Block,
}