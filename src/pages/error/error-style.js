import styled from 'styled-components'
import page404 from '../../assets/images/404.jpg'
import page401 from '../../assets/images/401.jpg'

export const PageError404 = styled.div`
    width:100%;
    height:100%;
    background: url(${page404}) center center / cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        bottom: 30px;
        
    .header {
        font-size: 18px;        
        text-align: center;
        h3 {
            margin: 10px;
            font-weight:800!important;
        }
    }

    .intro {
        margin-top: 16px;
        text-align: center;
    }
}

    
    
`

export const PageError401 = styled.div`
    width:100%;
    height:100%;
    background: url(${page401}) center center / cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        bottom: 30px;
        
    .header {
        font-size: 18px;        
        text-align: center;
        h3 {
            margin: 10px;
            font-weight:800!important;
        }
    }

    .intro {
        margin-top: 16px;
        text-align: center;
    }
}

    
    
`