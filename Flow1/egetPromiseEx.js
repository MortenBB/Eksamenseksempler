return new Promoise((resolve, object) => {
    Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
        if (err) reject(err)
        else resolve(newFriend)
    })
})
//return await Friends.findOneAndUpdate({ _id: input.id }, input, { new: true })