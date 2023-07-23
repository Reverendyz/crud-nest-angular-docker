import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GatosService } from './gatos.service';
import { Gato } from './gato/gato';

@Controller('gatos')
export class GatosController {
    constructor(
        private readonly gatosService: GatosService,
    ) {}

    @Get()
    async listarTodos(): Promise<Gato[]> {
        return this.gatosService.listarTodos();
    }

    @Post()
    async criar(@Body() gato: Gato): Promise<Gato> {
        return this.gatosService.criar(gato);
    }

    @Get(":id")
    async buscarPorId(@Param("id") id: string): Promise<Gato> {
        return this.gatosService.buscarPorId(id);
    }

    @Put(":id")
    async atualizar(@Param("id") id: string, @Body() gato:Gato): Promise<Gato> {
        return this.atualizar(id, gato);
    }

    @Delete(":id")
    async remover(@Param("id") id: string,) {
        return this.gatosService.remover(id);
    }
}
