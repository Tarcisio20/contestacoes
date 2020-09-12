import styled from 'styled-components'

export const Area = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
font-family: Roboto, sans-serif;

 .div-box {
    display:flex;
    @media (max-width: 400px){
        flex-direction: column;    
        align-items: center;
        justify-content: center;  
    }

    img {
        display:inline-block;
        width:100px;
        height:100px;
        margin-right:40px;
        @media (max-width: 400px){
            margin-right: 0;
        }
    }

    .div-box-text {
        border-left: 2px solid #CCC;
        padding-left: 10px;
        padding-top: 10px;
        @media (max-width: 400px){
            margin-top: 20px;
            border-left: none;
            border-top: 2px solid #CCC;
        }

        p {
            margin: 5px;
            font-size: 18px;
            @media (max-width: 400px){
                text-align: center;
            }

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