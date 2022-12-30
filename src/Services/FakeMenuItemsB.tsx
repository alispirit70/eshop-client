const FakeMenuItemsB = () => {
    const getData = () => {
        return {
            data: [
                {
                    title: 'جدید ترین',
                    subMenu: [
                        {
                            title: 'جدید ترین',
                            link: 'http://example.com',
                            list: [
                                {
                                    title: ' جدید ترین مردانه',
                                    link: 'http://example.com'
                                },
                                {
                                    title: 'جدید ترین زنانه',
                                    link: 'http://example.com'
                                },
                                {
                                    title: 'جدید ترین بچه گانه',
                                    link: 'http://example.com'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'زنانه',
                    subMenu: [
                        {
                            title: 'لباس زنانه',
                            link: 'http://example.com',
                            list: [
                                {
                                    title: 'مردانه',
                                    link: 'http://example.com'
                                },
                                {
                                    title: 'زنانه',
                                    link: 'http://example.com'
                                },
                                {
                                    title: 'بچه گانه',
                                    link: 'http://example.com'
                                }
                            ]
                        },
                        {
                            title: 'کیف و کفش',
                            link: 'http://example.com',
                            list: [
                                {
                                    title: 'مردانه',
                                    link: 'http://example.com'
                                },
                                {
                                    title: 'زنانه',
                                    link: 'http://example.com'
                                },
                                {
                                    title: 'بچه گانه',
                                    link: 'http://example.com'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }


    return {
        getData
    };
}

export default FakeMenuItemsB;