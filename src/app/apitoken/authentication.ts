import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class Authentication implements HttpInterceptor {
    constructor( ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
                setHeaders: {
                   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMyMWMwMGQ2LTY2ZDMtMTFlYi1hZTkzLTAyNDJhYzEzMDAwMiIsImNvbXBhbnlfbmFtZSI6IlByYWRlZXAiLCJyb2xlX2lkIjoxLCJlbWFpbCI6Imt1bWFyYXB5cHJhZGVlcEBnbWFpbC5jb20iLCJtb2JpbGVfbm8iOiI5MTc2MjY2ODM1IiwiaWF0IjoxNjMyOTEyNTE0LCJleHAiOjE2MzMwODUzMTR9.q7-zO_UWoYe9dulwSUDOPDqtikkvyMbs3FPCL2I5ymY`
                }
            });
        

        return next.handle(request);
    }
}
