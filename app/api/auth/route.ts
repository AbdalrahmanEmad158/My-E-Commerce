import { NextRequest, NextResponse } from "next/server";

export function GET(){
    //  Queries from DataBase
    return NextResponse.json({mesaggge:'sucs',players : [{playername:'mohammedSlah'},
        {playername:'cr7'},{playername:'messi'}]})
}


export function POST(request:NextRequest){

    request.json().then(data=>{
        console.log(data)
    })

    request.headers.get('content-type') // application/json
    request.headers.get('authorization') // Bearer token
    request.headers.get('cookie') // token
    request.body // ReadableStream
    //  Queries from DataBase
    return NextResponse.json({mesaggge:'sucs'})
}