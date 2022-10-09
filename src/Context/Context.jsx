import React,{useState,useEffect} from "react"
import { useHover } from "../Hooks/useHover"
const Context = React.createContext()


function ContextProvider(props){
    const[allPhotos,setAllPhotos] = useState([])
    const[cartItem,setCartItems] = useState([])


    function handleFavorite(imgId){
        setAllPhotos(prevPhotos=> {
            return prevPhotos.map(photo=> {
                if(photo.id === imgId){
                    return {...photo, isFavorite: !photo.isFavorite}
                }else {
                    return photo
                }
            })
        })
    }

    function addToCart(imgId){
    
     const cartItem = allPhotos.find(photo=> photo.id === imgId) 
     setCartItems(prevCartItems=> {
        return [...prevCartItems, cartItem]
     })
    }

    function removeFromCart(imgId){
        setCartItems(prevCartItems=> {
            return prevCartItems.filter(cartItem=> cartItem.id !== imgId)
        })
    }

    function deleteItem(imgId){
        setCartItems(prevCartItems=> {
            return prevCartItems.filter(cartItem=> cartItem.id !== imgId)
        })
    }

    useEffect(()=> {
      const fetchPhotos= async ()=>{
            try{
             const response = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
             if(!response.ok){
                new Error(response.status)
             }
             const photosArray= await response.json()
             setAllPhotos(photosArray)
            }catch(err){
                throw Error(err)
            }
        }
        fetchPhotos()
    }, [])
    return(
        <Context.Provider value={
         {
            allPhotos,
            handleFavorite,
            addToCart,
            removeFromCart,
            cartItem
         }}>
            {props.children}
        </Context.Provider>
    )
}


export {ContextProvider,Context}