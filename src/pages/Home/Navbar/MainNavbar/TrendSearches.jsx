import {useEffect, useState} from "react";
import get from '../../../../queries/get'
import {Link} from "react-router-dom";

export const TrendSearches = () => {
    const [value, setValue] = useState([])

    useEffect(() => {
        getTrend();
        console.log(value);
    }, [])

    const getTrend = async () => {
      try {
          const res = await get({
              url: 'https://api.digikala.com/v1/autocomplete/?q='
          })
          setValue(res.data)
      }
      catch (e) {
          console.log(e);
      }
    }



    return(
        <>
            <div>
                {value?.trends?.map((item, index) => {
                    return (
                        <Link to={''} key={index.toString()}>
                            <div className={'d-flex'}>
                                <div>{item?.keyword}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}