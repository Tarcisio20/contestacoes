import styled from 'styled-components'

export const Area = styled.div`
font-family: Roboto, sans-serif;
display: flex;
flex-direction: row;

.area-left {
    max-width:300px;
    background-color:rgba(1, 125, 197, 0.8);
    height: 100vh;

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
    flex:1;
    margin-right:0;
    margin-top: 10px;
    margin-left: 20px;

    h3 {
        text-align: center;
        text-transform:uppercase;
        color:#017dc5;
        margin-bottom: 10px;
        margin-top: 10px;
        
    }

    .buttonAdd{
        display:block;
        background-color:#7daf42;
        width:50px;
        height:50px;
        text-align:center;
        border-radius:50%;
        color:#fff;
        position:absolute;
        bottom:30px;
        right:50px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size:50px;
        }
    }

    .table {
        width: 95%;
        text-align: center;
        font-size: 15px;

        thead {
            color: #FFF;
            font-weight:bold;background-color: #017dc5;
            font-size:20px;
        }

        tbody tr:nth-child(2n) {
            background-color: #ccc;
        }

        tbody tr td a {
            background-color: transparent;
            display:inline-block;
            margin-right:3px;
            margin-top:3px;
            margin-bottom:3px;
            padding:3px;
            border-radius:4px;
            transition-property: background-color;
            transition-duration:0.5s;transition-timing-function:ease;

            &.edit {
                border: 1px solid blue;
                color: blue;
            }

            &.delete {
                border: 1px solid red;
                color: red;
            }
        }

        tbody tr td a.edit:hover {
            background-color: blue;
            color: #FFF;
        }

        tbody tr td a.delete:hover {
            background-color: red;
            color: #FFF;
        }

        tbody tr td:nth-child(1) {width:5%;}
        tbody tr td:nth-child(2) {width:25%;}
        tbody tr td:nth-child(3) {width:15%;}
        tbody tr td:nth-child(4) {width:20%;}
        tbody tr td:nth-child(5) {width:15%;}
        tbody tr td:nth-child(6) {width:15%;}
    }
}
`