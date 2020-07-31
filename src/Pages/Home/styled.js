import styled from 'styled-components'

export const Area = styled.div`
font-family: Roboto, sans-serif;
display: flex;

.area-left {
    background-color:rgba(1, 125, 197, 0.8);
    position:absolute;
    left:0;
    height: calc(100% - 50px);
    paddin-right:10px;

    .area-img {
        background-color:rgba(1, 125, 197, 0.8);
        padding: 0;
        margin: 0;
        width: 100%;
        height: 150px;
        overflow-y: hidden;
        border-bottom: 3px solid #FFF;

        img {
            display:block;
            width:100px;
            height:100px;
            margin: 0 auto;
            margin-top: 15px;
        }
    }

    .menu {
        padding:0;
        margin:0;
        ul, li {
            margin:0;
            padding:0;
            list-style:none;
        }


        li {
            display:flex;
            align-items:center;
            padding:15px 15px;
            transition-property: background-color;
            transition-duration:1s;transition-timing-function:ease;

            label {
                margin-right: 10px;
                margin-left: 10px;
                color:#EEE;
            }
        }

        li:hover, li.active {
            background-color:rgba(1, 125, 197, 0.8);
            color:#DDD;
        }
    }
}

.area-right {
    margin: 0 auto;
    margin-top: 10px;
}
`