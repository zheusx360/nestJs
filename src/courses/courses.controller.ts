import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Res,
  Patch,
  Delete,
} from '@nestjs/common';

const cursos = [
  {
    id: 1,
    nomeCurso: 'Informática',
    duracao: '2 anos',
    valorMensal: 'R$ 150,00',
  },
  {
    id: 2,
    nomeCurso: 'Informática Avançada',
    duracao: '1 ano e meio',
    valorMensal: 'R$ 180,00',
  },
  {
    id: 3,
    nomeCurso: 'Programação Básica',
    duracao: '1 ano',
    valorMensal: 'R$ 130,00',
  },
  {
    id: 4,
    nomeCurso: 'Desenvolvimento Web',
    duracao: '2 anos',
    valorMensal: 'R$ 160,00',
  },
  {
    id: 5,
    nomeCurso: 'Banco de Dados',
    duracao: '1 ano e meio',
    valorMensal: 'R$ 170,00',
  },
  {
    id: 6,
    nomeCurso: 'Inteligência Artificial',
    duracao: '2 anos',
    valorMensal: 'R$ 200,00',
  },
  {
    id: 7,
    nomeCurso: 'Redes de Computadores',
    duracao: '2 anos',
    valorMensal: 'R$ 160,00',
  },
  {
    id: 8,
    nomeCurso: 'Segurança da Informação',
    duracao: '1 ano',
    valorMensal: 'R$ 190,00',
  },
  {
    id: 9,
    nomeCurso: 'Sistemas Operacionais',
    duracao: '1 ano',
    valorMensal: 'R$ 140,00',
  },
  {
    id: 10,
    nomeCurso: 'Design Gráfico',
    duracao: '1 ano e meio',
    valorMensal: 'R$ 170,00',
  },
  {
    id: 11,
    nomeCurso: 'Programação Java',
    duracao: '2 anos',
    valorMensal: 'R$ 180,00',
  },
  {
    id: 12,
    nomeCurso: 'Machine Learning',
    duracao: '2 anos',
    valorMensal: 'R$ 210,00',
  },
  {
    id: 13,
    nomeCurso: 'Gestão de Projetos de TI',
    duracao: '1 ano',
    valorMensal: 'R$ 150,00',
  },
  {
    id: 14,
    nomeCurso: 'Análise de Dados',
    duracao: '1 ano e meio',
    valorMensal: 'R$ 160,00',
  },
  {
    id: 15,
    nomeCurso: 'Desenvolvimento Mobile',
    duracao: '2 anos',
    valorMensal: 'R$ 170,00',
  },
];

@Controller('courses')
export class CoursesController {
  @Get('getall')
  findAll(@Res() resp) {
    return resp.status(200).send({ response: cursos, status: 'success' });
  }

  @Get('by-id/:id')
  findById(@Res() resp, @Param('id') id: string) {
    const data = cursos.find((c) => c.id === +id);

    return resp.status(200).send({
      response:
        typeof data !== 'undefined' ? data : 'Não existem cursos com esse id.',
      status: 'success',
    });
  }

  @Post()
  create(@Res() resp, @Body() body) {
    cursos.push(body);
    return resp.status(200).send({ response: body, status: 'success' });
  }

  @Patch('update/:id')
  update(@Res() resp, @Param('id') id: string, @Body() body) {
    return resp.status(200).send({
      response: 'Atualizado com sucesso:' + id,
      data: body,
      status: 'success',
    });
  }

  @Delete('delete-id/:id')
  deleteById(@Res() resp, @Param('id') id: string) {
    const data = cursos.find((c) => c.id === +id);

    return resp.status(200).send({
      response:
        typeof data !== 'undefined'
          ? `Deletedo com sucesso`
          : 'Não existem cursos com esse id.',
      body: data,
      status: 'success',
    });
  }
}
