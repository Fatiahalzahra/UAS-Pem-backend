// import model News
const News = require("../models/News");

class NewsController {
    async index(req, res) {
        //Menampilkan data news
        const news = await News.all();

        const data = {
            message: "Menampilkan data news",
            data: news
        };

        res.status(200).json(data);
    }

    async store(req, res) {
        // memanggil method create. 

        const news = await News.create(req.body);
        const data = {
            message: "Menambahkan data news",
            data: news,
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        /**
         * check id berita*/
        const { id } = req.params;

        const news = await news.find(id);

        if (news) {
            // update data
            const newsUpdated = await News.update(id, req.body);
            const data = {
                message: "Mengupdate data news",
                data: newsUpdated,
            };

            res.status(200).json(data);
        }
        else {
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(401).json(data);
        }



    }

    async destroy(req, res) {
        const { id } = req.params;

        /**
         * cari id
         * jika ada, hapus data
         * jika tidak, kirim data tidak ada
         */

        const news = await News.find(id);

        if (news) {
            // hapus data
            await News.delete(id);
            const data = {
                message: "Menghapus data news",
            };

            res.status(200).json(data);
        }
        else {
            // data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const news = await News.find(id);

        if (news) {
            const data = {
                message: "Menampilkan detail data Berita",
                data: news,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(401).json(data);
        }

    }
}

// make an object News Controller
const object = new NewsController();

// export object
module.exports = object;