const Formarea = () => {
  return (
    <div className="container mt-5 mb-32">
      <form className="mx-auto pt-16 w-100">
        <div className="mb-6 flex justify-between">
          <label htmlFor="email" className="mr-3">メールアドレス</label>
          <input id="email" name="email" type="email" className="sm:w-52 md:w-80" placeholder="name@example.com" />
        </div>
        <div className="mb-12 flex justify-between items-center">
          <label htmlFor="message" className="form-label">問合せ内容</label>
          <textarea id="message" name="message" className="sm:w-52 md:w-80" rows="3"></textarea>
        </div>
          <button type="submit" className="bg-green-900 hover:bg-green-800 text-white rounded px-4 py-2 w-44 mx-auto block">送信</button>
      </form>
    </div>
  );
}

export default Formarea;