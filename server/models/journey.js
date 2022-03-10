
module.exports= class Journey{
 
    constructor(subject, date, fileName){
        this.subject = subject;
        this.date = date;
        this.fileName =fileName;
    }
    addJourney() {
        return `INSERT INTO journeys(subject, date, filename) \
                     VALUES('${this.subject}', '${this.date}', '${this.fileName}')`;
    }
  
    static deleteJourney(id){
        return`DELETE FROM journeys WHERE id='${id}'`;
    }
    static updateJourney(id,status) {
        return `UPDATE journeys SET status = '${status}' WHERE id = ${id}`;
    }

    static getAllJourneys() {
        return `SELECT *, DATE_FORMAT(date, '%Y.%m.%d') AS niceDate FROM journeys`;
    }   
}