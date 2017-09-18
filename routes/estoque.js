var logger = require('../servicos/logger.js');

module.exports = function(app){
  app.get('/estoque', function(req, res){
    logger.info('/estoque - Acessou');
    res.send('OK.');
  });

  app.post('/estoque/listaProdutosParaVenda', function(req, res){
    var connection = app.persistencia.connectionFactory();
    var EstoqueDao = new app.persistencia.EstoqueDao(connection);

    EstoqueDao.listaProdutosParaVenda(function(erro, resultado){
      if(erro){
        logger.error('Estoque/listaProdutosParaVenda - EstoqueDao.listaProdutosParaVenda: ' + erro);
        res.status(500).send(erro);
      } else {
        logger.info('estoque/listaProdutosParaVenda - EstoqueDao.listaProdutosParaVenda - Acessou');
        res.status(201).json(resultado);
      }
    });
  });

  app.post('/estoque/listaProdutoEmEstoquePorId', function(req, res){

    var produto = req.body;

    var connection = app.persistencia.connectionFactory();
    var EstoqueDao = new app.persistencia.EstoqueDao(connection);

    EstoqueDao.listaProdutoEmEstoquePorId(produto.id, function(erro, resultado){
      if(erro){
        logger.error('Estoque/listaProdutoEmEstoquePorId - EstoqueDao.listaProdutoEmEstoquePorId: ' + erro);
        res.status(500).send(erro);
      } else {
        logger.info('estoque/listaProdutoEmEstoquePorId - EstoqueDao.listaProdutoEmEstoquePorId - Acessou');
        res.status(201).json(resultado);
      }
    });
  });

  app.post('/estoque/listaProdutosParaDescarte', function(req, res){
    var connection = app.persistencia.connectionFactory();
    var EstoqueDao = new app.persistencia.EstoqueDao(connection);

    EstoqueDao.listaProdutosParaDescarte(function(erro, resultado){
      if(erro){
        logger.error('Estoque/listaProdutoEmEstoquePorId - EstoqueDao.listaProdutoEmEstoquePorId: ' + erro);
        res.status(500).send(erro);
      } else {
        logger.info('estoque/listaProdutosParaDescarte - EstoqueDao.listaProdutosParaDescarte - Acessou');
        res.status(201).json(resultado);
      }
    });
  });
}
