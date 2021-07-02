let Livro = require( '../models/Livro' );


let livrosData = [
    {'id': 1, 'nomeLivro': 'O principe', 'qtdPaginas': '135'},
    {'id': 2, 'nomeLivro': 'Arquipelogo', 'qtdPaginas': '200'}
];
let nextID = 3;

module.exports = {
    //Buscar os livros
    getAllLivros: ( req, res, next ) => {
        res.status(200).json(livrosData);
    },

    getLivrosByID: ( req, res, next ) => {
        let idLivros = req.params.id;

        for( let i = 0; i < livrosData.length; i++ ) {

            let livro = livrosData[ i ];

            if( livro.id == idLivros ) {
                return res.status(200).json( livro );
            }
        }

        return res.status(404).json({ error: "Usuários não encontrado!" });
    },

    addLivro: ( req, res, next ) => {
        let nomeLivro = req.body.nomeLivro;
        let qtdPaginas = req.body.qtdPaginas;

        let newLivro = new Livro( nextID, nomeLivro, qtdPaginas );
        nextID++;

        livrosData.push( newLivro );

        return res.status(201).json({msg: "Usuario adicionado com sucesso", livro: newLivro });
    },

    
}

/*addLivros: ( req, res, next ) => {
        let idLivros = req.params.id;

        for( let i = 0; i < livrosData.length; i++ ) {

            let livro = livrosData[ i ];

            if( livro.id == idLivros ) {
                livro.nomeLivro = req.body.nomeLivro ? req.body.nomeLivro : livro.nomeLivro;
                livro.qtdPaginas = req.body.qtdPaginas ? req.body.qtdPaginas : livro.qtdPaginas;

                return 
            }
        }
    }*/