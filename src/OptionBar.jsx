import React, { useState } from 'react'
import CustomFilter from './CustomFilters'
import FilterContainer from './FilterContainer'
import { useDispatch } from 'react-redux'
import { resetCustom } from './redux/slices/customSlice'
import { resetFilters } from './redux/slices/filterSlice'

const OptionBar = () => {
    const [selected,setSelected] = useState("existing")
    const dispatch = useDispatch()
  return (<>
    <div style={{display:"flex",gap:"10px"}}>

     <button onClick={()=>{setSelected("custom")
     dispatch(resetFilters())
    }}>custom</button>
     <button onClick={()=>{setSelected("existing")
    dispatch(resetCustom())}}>existing</button>

    </div>
    <div>
        {
            selected === "custom"?(<CustomFilter />):
            (<FilterContainer />)
        }
    </div>
    </>
  )
}

export default OptionBar