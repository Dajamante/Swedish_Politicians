# -*- coding: utf-8 -*-

from model import Model
from data import Data
from sklearn.linear_model import SGDClassifier
from sklearn.linear_model import LogisticRegression
from sklearn import svm
import os
import numpy as np


def main():

    # =====Environmental variables=====
    host = os.environ['DBHOST']  
    port = '5432'
    database = os.environ['DBDB']  
    user = os.environ['DBUSER']  
    password = os.environ['DBPASS'] 
    # ================================

    # ====Instatiation of Classes====
    model = Model(':/', ':/')
    database = Data(user=str(user), host=str(host), port=str(port),
                    database=str(database), password=str(password))

    # ===============================

    # ====Temp test sentances========
    test_sentances = ['jag är väldigt glad', 'jag älskar mitt liv',
                      'hata allt och alla', 'längre bort', 'fan va jobbig han är']
    test_targets = [model.emotions[0], model.emotions[0],
                    model.emotions[2], model.emotions[1], model.emotions[2]]
    # ===============================

    # Extract data
    df_anforanden = database.get_data_table('anforandetext')
    df_target = database.get_data_table('resultat_sentiment')
    anforande_texts = df_anforanden['text']

    # Build a pipeline
    text_clf = model.building_pipeline(
        SGDClassifier, test_sentances=test_sentances, test_targets=test_targets)

    # train the classifier
    text_clf.fit(model.training, model.train_target)

    # testing classifier
    docs_test = model.testing
    predicted = text_clf.predict(docs_test)

    res_test = model.test_classification(predicted)
    print(predicted,res_test)

    # strip anförande of <p>,</p>,...
    anforande_stripped = [anforande.strip('<p>').strip(
        '</p>').replace('</p><p>', '') for anforande in np.array(anforande_texts)]

    # preict sentiment of anförande
    predicted_anforande = text_clf.predict(anforande_stripped)
    # convert to labels to floats
    predicted_anforande = [float(label) for label in predicted_anforande]

    df_target['anforande_id'] = df_anforanden['anforande_id']
    df_target['resultat'] = predicted_anforande

    print(df_target)
    database.insert_data_table(df_target, df_target, 'resultat_sentiment')


if __name__ == '__main__':
    main()
