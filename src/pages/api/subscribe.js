import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: 'fdb2b7ee073090edee683c588e3b208c-us20',
    server: 'us20', // e.g. us1
});

export default async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        await mailchimp.lists.addListMember('ea42a12a1ce20aa3f00c29ccb5c3f437', {
            email_address: email,
            status: 'subscribed',
        });

        return res.status(201).json({ error: '' });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};

