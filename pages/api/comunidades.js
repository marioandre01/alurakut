import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response) {

  if (request.method === 'POST') {
    const TOKEN = '492f9581b875c7eca49077cc16f342';

    const client = new SiteClient(TOKEN);

    // Validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "981098", //ID do Model de "Communitites" criado pelo DatoCMS
      ...request.body,
      // title: "Comunidades de Teste",
      // imageUrl: "https://github.com/omariosouto.png",
      // creatorSlug: "omariosouto"
    })

    console.log(registroCriado);

    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado,
    })

    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}