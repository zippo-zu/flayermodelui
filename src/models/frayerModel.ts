import { QueryResult, QueryResultRow } from "pg";
import { getDb } from "./db";
import { FrayerModel } from "../types/FrayerModel";


export async function insertFrayerModel(frayerModel: FrayerModel) {

    const db =getDb();
    const res= await db.query(`insert into frayer_model(filename,prompt,Concept,Definition,Characteristics,Examples,NonExamples,number)values (
    $1,
    $2,
    '$3,
   $4,
    $5,
   $6,
    $7,
   $8
)`,[
    frayerModel.fileName,
    frayerModel.prompt,
    frayerModel.Concept,
    frayerModel.Definition,
    frayerModel.Characteristics,
    frayerModel.Examples,
    frayerModel.NonExamples,
    frayerModel.number
]
);

}

export async function getRecommendedFrayerModel(page :number,limit:number) :Promise<FrayerModel[]> {

    if(page<1){
        page=1;
    }
    if(limit<=0){
        limit=50;
    }
    const offset=(page-1)*limit;
    const db =getDb();
    const res= await db.query(`select * from frayer_model limit $1 offset $2`,[limit,offset]);
    if(res.rowCount==0){
        return [];
    }
    const frayerModels =getFrayerModelFromQueryResult(res);
    return frayerModels;

}

function getFrayerModelFromQueryResult(res:QueryResult):FrayerModel[]{
    if(!res.rowCount || res.rowCount===0){
        return [];
    }
    const frayerModels:FrayerModel[]=[];
    const {rows} = res;
    rows.forEach((row)=>{
        const  frayer=formateFrayerModel(row)
        if(frayer){
            frayerModels.push(frayer);
        }
    })
    return frayerModels;

}

function formateFrayerModel(row:QueryResultRow):FrayerModel|undefined{
    let frayerModel:FrayerModel ={
        fileName : row.filename,
        number:row.number,  
        prompt:row.prompt,
        Concept:row.concept,
        Definition:row.definition,
        Characteristics:row.characteristics,
        Examples:row.examples,
        NonExamples:row.nonexamples
    }
    console.log("formate frayer model :",frayerModel);
    console.log("row  :",row);
    return frayerModel;
}


export async function getFrayerModelByNum(number:string):Promise<FrayerModel|undefined>{

    const db =getDb();
    const res= await db.query(`select * from frayer_model where number=$1`,[number]);
    if(res.rowCount==0){
        return undefined;
    }
   // console.log("db get info :",res);
    return formateFrayerModel(res.rows[0]);

}