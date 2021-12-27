import axios from 'axios'
import React, { ReactElement, useEffect, useState } from 'react'
import { isExpressionWithTypeArguments } from 'typescript';

interface Props {

}



export default function CancelToken({ }: Props): ReactElement {
    const [value, setValue] = useState<string>('')


    // useEffect(() => {
    //     const cancelToken = axios.CancelToken; // cancel token
    //     const source = cancelToken.source();

    //     (async () => {
    //         try {
    //             const chord = await axios.get(`https://api.uberchord.com/v1/chords/${value}`,
    //                 { cancelToken: source.token }) // config
    //             return chord.data
    //         }
    //         catch (err) {
    //             if (axios.isCancel(err)) { // check if the request cancelld
    //                 throw "Catch - axios request cancelled"
    //             }
    //         }
    //     })()
    //     return () => {
    //         source.cancel("Cleanup - axios request cancelled")
    //     }
    // }, [value])

    // useEffect(() => {
    //     const cancelToken = axios.CancelToken; // cancel token
    //     const source = cancelToken.source();

    //     (async () => {
    //         try {
    //             const dataRespone = await axios.get('https://fetchdata.com',
    //                 { cancelToken: source.token }) // config
    //             return dataRespone.data
    //         }
    //         catch (err) {
    //             if (axios.isCancel(err)) { // check if the request cancelld
    //                 throw "Catch - axios request cancelled"
    //             }
    //         }
    //     })()
    //     return () => { // cancel the previous request
    //         source.cancel()
    //     }
    // }, [valueChange])



    return (
        <div>
            Cancel
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
        </div>
    )
}
