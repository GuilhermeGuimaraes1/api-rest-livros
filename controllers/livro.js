
let Livro = require( '../models/Livro' );

let livroData = [
    { 'id': 1, 'nomeLivro': 'O principe', 'qtdPaginas': '135' },
    { 'id': 2, 'nomeLivro': 'Arquipelogo', 'qtdPaginas': '200' }
];
let nextID = 3;

module.exports = {
    //Buscar os livros
    getAllLivros: ( req, res, next ) => {
        res.status( 200 ).json( livroData );
    },

    getLivrosByID: ( req, res, next ) => {
        let idLivros = req.params.id;

        for( let i = 0; i < livroData.length; i++ ) {

            let livro = livroData[ i ];

            if( livro.id == idLivros ) {
                return res.status(200).json( livro );
            }
        }

        return res.status( 404 ).json( { error: "Livro não encontrado!" } );
    },

    addLivro: ( req, res, next ) => {
        let nomeLivro = req.body.nomeLivro;
        let qtdPaginas = req.body.qtdPaginas;

        let newLivro = new Livro( nextID, nomeLivro, qtdPaginas );
        nextID++;

        livroData.push( newLivro );

        return res.status( 201 ).json( {msg: "Livro adicionado com sucesso", livro: newLivro } );
    },

    updateLivro: ( req, res, next ) => {
        let idLivro = req.params.id;

        for( let i = 0; i < livroData.length; i++ ) {
            let livro = livroData[i];
            if( livro.id == idLivro ) {
                livro.nomeLivro = req.body.nomeLivro ? req.body.nomeLivro : livro.nomeLivro;
                livro.qtdPaginas = req.body.qtdPaginas ? req.body.qtdPaginas : livro.qtdPaginas; 
                
                return res.status( 200 ).json( {msg: "Livro alterado com sucesso!", livro: livro} );
            }
        }
        return res.status( 404 ).json( { msg: "Livro não encontrado!" } );
    },

    deleteLivro: ( req, res, next ) => {
        let idLivro = req.params.id;

        for( let i = 0; i < livroData.length; i++ ) {
            let livro = livroData[i];
            if( livro.id == idLivro ) {
                livroData.splice( i, 1 );
                return res.status( 200 ).json( { msg: "Livro removido com sucesso!" } );
            }
        }
        return res.status( 404 ).json( { msg: "Livro não encontrado!" } );
    }
}
















