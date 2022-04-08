import {createGlobalStyle} from "styled-components"

export const theme = {
    current: "light",
    articleWidth: "96rem",
    tableOfContentWidth: "18rem",
    darkColor: "#222831",
    darkPurpleColor: "#270082",
    purpleColor: "#7A0BC0",
    pinkColor: "#FA58B6"
}

export const lightTheme = {
    color: "black",
    headingColor: "black",
    homePageMaxWidth: "96rem",
    articlePagMaxWidth: `calc(${theme.articleWidth} + ${theme.tableOfContentWidth} + 10rem)`,
    articleWidth: "96rem",
    tableOfContentWidth: "18rem",
    bgColor: "#fbfbfb",
    tagBgColor: "#EEEEEE",
    highlightTextColor: "#FFF",
    highlightTagTextColor: "rgba(255, 255, 255, 0.8)",
    highlightTagBgColor: "rgba(255, 255, 255, 0.5)",
    highlightDateColor: "rgba(255, 255, 255, 0.8)",
    avatarBorderColor: "rgba(0, 0, 0, 0.2)",
    blockQuoteBgColor: "rgba(0, 0, 0, 0.1)",
    blockQuoteBorderColor: "rgba(0, 0, 0, 0.2)",
    codeColor: "#FA58B6",
    codeBgColor: "rgb(1, 22, 39)",
    tableContentColor: "rgba(0, 0, 0, 0.8)",
    tableContentColorHover: "#FA58B6",
    scrollToTopBgColor: theme.darkColor,
    scrollToTopColor: theme.pinkColor,
    scrollToTopBgColorHover: "rgba(0, 0, 0, 0.3)",
    scrollToTopColorHover: "rgba(0, 0, 0, 0.5)",
    paginateActiveBgColor: "rgba(0, 0, 0, 0.3)",
    paginateActiveColor: "#FA58B6",
    paginateBorderColor: "#eaeaea",
    paginateColor: "rgba(0, 0, 0, 0.4)",
    paginateDisabledBgColor: "rgba(0, 0, 0, 0.3)",
    paginateHoverBgColor: "rgba(0, 0, 0, 0.2)",
    paginateHoverColor: "#FA58B6",
    seriesBorderColor: "#1A1A40",
    seriesHoverBgColor: "rgba(26, 26, 64, 0.5)",
    seriesHoverColor: "#7A0BC0",
    articleBgColor: "transparent"
};

export const darkTheme = {
    color: "rgba(255,255, 255, 0.8)",
    headingColor: theme.pinkColor,
    homePageMaxWidth: "96rem",
    articlePagMaxWidth: `calc(${theme.articleWidth} + ${theme.tableOfContentWidth} + 10rem)`,
    articleWidth: "96rem",
    tableOfContentWidth: "18rem",
    bgColor: theme.darkColor,
    tagTextColor: "rgba(0, 0, 0, 0.8)",
    tagBgColor: "#EEEEEE",
    highlightTagTextColor: "rgba(0, 0, 0, 0.8)",
    highlightTagBgColor: "#EEEEEE",
    highlightDateColor: "rgba(255, 255, 255, 0.8)",
    avatarBorderColor: theme.pinkColor,
    blockQuoteBgColor: "rgba(0, 0, 0, 0.1)",
    blockQuoteBorderColor: "rgba(0, 0, 0, 0.2)",
    codeColor: "#FA58B6",
    codeBgColor: "#1A1A40",
    tableContentColor: "rgba(0, 0, 0, 0.8)",
    tableContentColorHover: "#FA58B6",
    scrollToTopBgColor: "#393E46",
    scrollToTopColor: theme.pinkColor,
    scrollToTopBgColorHover: "rgba(0, 0, 0, 0.3)",
    scrollToTopColorHover: "rgba(255, 255, 255, 0.5)",
    paginateActiveBgColor: "rgba(0, 0, 0, 0.3)",
    paginateActiveColor: "#FA58B6",
    paginateBorderColor: "#eaeaea",
    paginateColor: "rgba(0, 0, 0, 0.4)",
    paginateDisabledBgColor: "rgba(0, 0, 0, 0.6)",
    paginateHoverBgColor: "rgba(0, 0, 0, 0.2)",
    paginateHoverColor: "#FA58B6",
    seriesBorderColor: "#393E46",
    seriesHoverBgColor: "rgba(57, 62, 70, 0.5)",
    seriesHoverColor: "#7A0BC0",
    articleBgColor: "#393E46"
};

const setThemeVars = (lightVar, darkVar) => {
    console.log(theme.current)
    return theme.current === "light" ? lightVar : darkVar
}

export const GlobalStyles = createGlobalStyle`
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
    background-color: ${() => setThemeVars(lightTheme.bgColor, darkTheme.bgColor)};
    color: ${() => setThemeVars(lightTheme.color, darkTheme.color)} !important;
    font-size: 2rem;
    line-height: 1.6;
    font-weight: 300;
    transition: background-color .2s linear;
    
    @media (max-width: 900px) {
      font-size: 1.8rem;
    }

    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
  
  code {
    padding: .3rem .5rem;
    font-size: 1.8rem;
    color: ${setThemeVars(lightTheme.codeColor, darkTheme.codeColor)};
    background-color: ${setThemeVars(lightTheme.codeBgColor, darkTheme.codeBgColor)};
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;

    @media (max-width: 900px) {
      font-size: 1.6rem;
    }

    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
  
  pre {
    font-size: 1.6rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;

    @media (max-width: 900px) {
      font-size: 1.4rem;
    }

    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    color: ${() => setThemeVars(lightTheme.headingColor, darkTheme.headingColor)};
  }
  
  blockquote {
    margin-left: 0.5rem;
    padding: 1rem 0 1rem 1rem;
    border-left: 5px solid ${setThemeVars(lightTheme.blockQuoteBorderColor, darkTheme.blockQuoteBorderColor)};
    background-color: ${setThemeVars(lightTheme.blockQuoteBgColor, darkTheme.blockQuoteBgColor)};
  }
  
  .series-link {
    color: ${() => setThemeVars(lightTheme.color, darkTheme.color)};
  }
`