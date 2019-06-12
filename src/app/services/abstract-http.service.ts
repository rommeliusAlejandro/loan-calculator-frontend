import { environment } from 'src/environments/environment.prod';

export abstract class AbstractHttpService {

    public getHost(): String {
        return environment.backend.host + ':' + environment.backend.port;
    }

    public abstract path(): String;

    public getUrl(): string {
        return this.getHost() + '' + this.path();
    }

}