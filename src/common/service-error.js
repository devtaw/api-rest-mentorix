// classe de erro para melhorar tratativas de erros nos services
export class ServiceError extends Error {
    constructor(message, errorCode = 400){
        super(message)
        this.errorCode = errorCode

    }
}

