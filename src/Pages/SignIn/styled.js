import styled from 'styled-components'

export const Area = styled.div`
display: flex;
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
            border:1px solid #F5D231;
            width:200px;
            border-radius:4px;
            height:30px;
            padding: 10px;
            text-align:center;
        }

        input:hover, input:focus {
            border: 2px solid #F5D231;
        }

        input.form-button {
            display:flex;
            align-items:center;
            justify-content: center;
            border:2px solid #F5D231 ;
            background-color:transparent;
            font-size: 22px;
            height:40px;
            color: #F5D231 ;
            font-weight:bold;
            font-family: 'Roboto Mono', sans-serif;
            transition: .2s;

            &:hover {
                background-color: rgba(245, 210, 49, 0.9);
                color: #FFF;
            }
        }
    }
}
`