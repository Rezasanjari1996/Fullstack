import { PersonSService } from './../person-s/person-s.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { personDto } from "./../viewModel/PersonDto";

@Controller('person')
export class PersonController {
    constructor(private readonly PersonService:PersonSService){}
    @Post('create')
    Create(@Body() persons:personDto){
        this.PersonService.Register(persons);
    }
    @Get('getall')
    getall(){
return this.PersonService.GetAll();
    }
}
