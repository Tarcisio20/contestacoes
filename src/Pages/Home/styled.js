import styled from 'styled-components'

export const Area = styled.div`
font-family: Roboto, sans-serif;
display: flex;
flex-direction: row;
font-family: 'Roboto Mono', sans-serif;

@media (max-width: 400px){
    flex-direction: column;
}

.area-left {
    max-width:300px;
    background-color:rgba(1, 125, 197, 0.8);
    height: 100vh;

    @media (max-width: 400px){
        height: auto;
        max-width: 100%;
    }

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
            cursor:pointer;
            border-right:5px solid transparent;
            

            transition: background-color 0.7s, border 0.7s;

            label {
                margin-right: 10px;
                margin-left: 10px;
                color:#EEE;
            }
        }

        li:hover, li.active {
            background-color:rgba(1, 125, 197, 0.8);
            border-right:5px solid #3497d1;
            color:#DDD;
        }
    }
}

.area-right {
    flex:1;
    margin-right:0;
    margin-top: 10px;
    margin-left: 20px;

    @media (max-width: 400px){
        margin: 10px 10px;
    }

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

        @media (max-width: 400px){
            bottom: 10px;
            right: 10px;
            width:30px;
            height:30px;
         }

        svg {
            font-size:50px;
            @media (max-width: 400px){
                font-size: 30px;
            }
        }
    }

    

    .table {
        width: 95%;
        text-align: center;
        font-size: 15px;
        @media (max-width: 400px){
            font-size: 12px;
            margin: 5px;
        }

        thead {
            color: #FFF;
            font-weight:bold;background-color: #017dc5;
            font-size:20px;

            
            
        }

        thead tr th:nth-child(1) {
            @media (max-width: 400px){
                display: none;
            }
        }
        thead tr th:nth-child(2) {
            @media (max-width: 400px){
                display: none;
            }
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

        tbody tr td:nth-child(1) {width:5%;
            @media (max-width: 400px){
                display: none;
            }
        }
        tbody tr td:nth-child(2) {width:25%;
        
            @media (max-width: 400px){
                display: none;
            }
        }
        tbody tr td:nth-child(3) {width:15%;}
        tbody tr td:nth-child(4) {width:20%;}
        tbody tr td:nth-child(5) {width:15%;}
        tbody tr td:nth-child(6) {width:15%;}
    }

    .pagination {
        display:flex;
        margin-top: 20px;
        justify-content:center;
        ul, li {
            margin:0;
            padding:0;
            list-style:none;
        }

        ul li a {
            text-decoration:none;
            display:inline-block;
            padding: 5px;
            color:#999;
            transition-property: background-color;
            transition-duration:0.5s;transition-timing-function:ease;

            &.active {
                border-bottom: 2px solid #017dc5;
                color:#017dc5;   
            }
        }

        ul li a:hover { 
            color:#555;
        }
        
        ul {
            display:flex;
        }

        ul li {
            margin-right: 5px;
        }
    }
}
`