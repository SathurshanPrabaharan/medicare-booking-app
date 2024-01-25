export const formateDate=(date,config)=>{
    const defacultOptions = {day:'numeric',month:'long',year:'numeric'}
    const options = config ?config:defacultOptions

    return new Date(date).toLocaleDateString('en-US',options)

}