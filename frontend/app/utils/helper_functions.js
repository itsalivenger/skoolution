const update_params = (qst, reponse, tau = .05, tetha) => {

    const a = qst.param_a;
    const b = qst.param_b;
    const r = reponse === qst.correct_choice

    // mise a jour de b
    p = proba_succes(tetha, a, b);
    new_b = qst.param_b - tau * (r - p)


    // mise a jour de tetha
    
}

const proba_succes = (tetha, a, b) => { 
    return 1 / (1 + Math.exp(-a * (tetha - b)))
}

c
export default update_params;