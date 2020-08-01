import styled from 'styled-components'

export const Area = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
font-family: Roboto, sans-serif;

 .div-box {
    display:flex;

    img {
        display:inline-block;
        width:100px;
        height:100px;
        margin-right:40px;
    }

    .div-box-text {
        border-left: 2px solid #CCC;
        padding-left: 10px;
        padding-top: 10px;

        p {
            margin: 5px;
            font-size: 18px;

        }

        a {
            text-decoration: none;
            color:#BBB;

            &:hover {
                color: #AAA;
            }
        }
    }
}
`