import styled, { createGlobalStyle } from 'styled-components';

import { color } from './color';

export const StyledButton = styled.div`
  width: 100vw;
  max-width: 960px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.black};
  border-radius: 20px;
  margin: 0 0 84px;
  @media (max-width: 950px) {
    margin: 0 16px 84px;
    width: calc(100vw - 32px);
  }
`;

export const StyledInputDiv = styled.div`
  width: 100vw;
  height: 60px;
  max-width: 960px;
  border: solid 1px #dcdcdc;
  border-radius: 30px;
`;

export const StyledInput = styled.input`
  width: calc(100vw - 36px - 36px);
  margin: 0 36px;
  height: 58px;
  max-width: calc(960px - 36px - 36px);
  border: none;
  background-color: #ffffff;
`;

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
        v2.0 | 20110126
        License: none (public domain)
     */

* {
  box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 16px;
  font: inherit;
  vertical-align: baseline;
  color: #181818;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}
`;

export default StyledButton;
