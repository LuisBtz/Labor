import { createGlobalStyle } from 'styled-components';

import ntligeot from '../../assets/fonts/NT-Bau-Mono-Light.eot';
import ntligwoff from '../../assets/fonts/NT-Bau-Mono-Light.woff';
import ntligwoff2 from '../../assets/fonts/NT-Bau-Mono-Light.woff2';

import ntblaeot from '../../assets/fonts/NTBauMono-Black.eot';
import ntblawoff from '../../assets/fonts/NTBauMono-Black.woff';
import ntblawoff2 from '../../assets/fonts/NTBauMono-Black.woff2';

import ntboleot from '../../assets/fonts/NTBauMono-Bold.eot';
import ntbolwoff from '../../assets/fonts/NTBauMono-Bold.woff';
import ntbolwoff2 from '../../assets/fonts/NTBauMono-Bold.woff2';

import ntmedeot from '../../assets/fonts/NTBauMono-Medium.eot';
import ntmedwoff from '../../assets/fonts/NTBauMono-Medium.woff';
import ntmedwoff2 from '../../assets/fonts/NTBauMono-Medium.woff2';

import ntregeot from '../../assets/fonts/NTBauMono-Regular.eot';
import ntregwoff from '../../assets/fonts/NTBauMono-Regular.woff';
import ntregwoff2 from '../../assets/fonts/NTBauMono-Regular.woff2';

import ocreot from '../../assets/fonts/OCR-A.eot';
import ocrwoff from '../../assets/fonts/OCR-A.woff';
import ocrwoff2 from '../../assets/fonts/OCR-A.woff2';


export const Typography = createGlobalStyle`

@font-face {
    font-family: 'NT Bau Mono Light';
    src: url('${ntligeot}');
    src: url('${ntligeot}?#iefix') format('embedded-opentype'),
        url('${ntligwoff2}') format('woff2'),
        url('${ntligwoff}') format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'NT Bau Mono Black';
    src: url('${ntblaeot}');
    src: url('${ntblaeot}?#iefix') format('embedded-opentype'),
        url('${ntblawoff2}') format('woff2'),
        url('${ntblawoff}') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'NT Bau Mono Bold';
    src: url('${ntboleot}');
    src: url('${ntboleot}?#iefix') format('embedded-opentype'),
        url('${ntbolwoff2}') format('woff2'),
        url('${ntbolwoff}') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'NT Bau Mono Medium';
    src: url('${ntmedeot}');
    src: url('${ntmedeot}?#iefix') format('embedded-opentype'),
        url('${ntmedwoff2}') format('woff2'),
        url('${ntmedwoff}') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'NT Bau Mono Regular';
    src: url('${ntregeot}');
    src: url('${ntregeot}?#iefix') format('embedded-opentype'),
        url('${ntregwoff2}') format('woff2'),
        url('${ntregwoff}') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'OCR A';
    src: url('${ocreot}');
    src: url('${ocreot}?#iefix') format('embedded-opentype'),
        url('${ocrwoff2}') format('woff2'),
        url('${ocrwoff}') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

:root {
    --light: 'NT Bau Mono Light';
    --regular: 'NT Bau Mono Regular';
    --medium: 'NT Bau Mono Medium';
    --bold: 'NT Bau Mono Bold';
    --black: 'NT Bau Mono Black';
    --ocr: 'OCR A';
}

a {
    color: black;
}

`