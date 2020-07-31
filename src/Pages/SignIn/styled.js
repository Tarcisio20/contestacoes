import styled from 'styled-components'

export const Area = styled.div`
display: flex;
flex-direction: column;
form {
    display: block;
    margin: 45px auto;

    .div-form-input {
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom: 10px;

        label {
            margin-right: 10px;
            margin-bottom: 10px;
            font-variant: all-petite-caps;
            font-family: 'Roboto Mono', sans-serif;
        }

        input {
            outline:0;
            border:1px solid #017dc5;
            width:200px;
            border-radius:4px;
            height:30px;
            padding: 10px;
            text-align:center;
        }

        input:hover, input:focus {
            border: 2px solid #017dc5;
        }

        input.form-button {
            display:flex;
            align-items:center;
            justify-content: center;
            border:2px solid #017dc5 ;
            background-color:transparent;
            font-size: 22px;
            height:40px;
            color: #017dc5 ;
            font-weight:bold;
            font-family: 'Roboto Mono', sans-serif;
            padding:0;
            transition-property: background-color;
            transition-duration:1s;transition-timing-function:ease;

            &:hover {
                background-color: rgba(1, 125, 197, 0.9);
                color: #FFF;
            }
        }
    }
}
`