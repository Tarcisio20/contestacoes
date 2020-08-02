import styled from 'styled-components'

export const Area = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
font-family: 'Roboto Mono', sans-serif;

.area-left {
    display:flex;
    flex-direction:column;
    color:#017dc5;
    font-size: 16px;
    padding-right:20px;

    svg {
        margin: 0 auto;
        width: 70px;
        height: 70px;
    }

    h3 {
        margin: 10px 0;
        text-transform:uppercase;
    }
}

form {
    padding-left:10px;
    padding-top:10px;
    padding-bottom:10px;
    border-left: 3px solid #017dc5;

    .div-input {
        display:flex;
        margin-bottom:10px;
        justify-content: center;

        label {
            flex:1;
            align-items: end;
            color: #017dc5;       
            text-align:center;
        }

        input{
           width: 300px;
           margin-left: 10px;
           border:1px solid  #017dc5;
           border-radius:4px;
           padding:0 10px;
           outline:0;
           color: #999; 
           font-family: 'Roboto Mono', sans-serif;
           text-align:center;
        }

        input:focus {
            border 2px solid #017dc5;
        }

        button {
            width: 200px;
            height: 40px;
            margin-right: 10px;
            cursor:pointer;
            background-color:transparent;
            font-size: 16px;
            text-transform:uppercase;
            border-radius:4px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #017dc5;
            color: #017dc5;
            transition:0.7s ease;
            text-decoration:none;

            &:hover {
                background-color:#017dc5;
                color:#FFF;  
            }

            sgv {
                margin-right:10px;
            }
        }

    }
}
`