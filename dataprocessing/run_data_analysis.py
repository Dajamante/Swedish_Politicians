# -*- coding: utf-8 -*-

from model import Model
from data import Data
from sklearn.linear_model import SGDClassifier
import os


def main():

    # =====Environmental variables=====
    host = os.environ.get('DBHOST', 'localhost')
    port = '5432'
    database = os.environ.get('DBDB', 'mvk')
    user = os.environ.get('DBUSER', 'postgres')
    password = os.environ.get('DBPASS', '')
    # ================================

    # ====Instatiation of Classes====
    model = Model(':/', ':/')
    database = Data(user=user, host=host, port=port,
                    database=database, password=password)
    # ===============================

    # ====Temp test sentances========
    test_sentances = ['jag är väldigt glad', 'jag älskar mitt liv',
                      'hata allt och alla', 'längre bort', 'fan va jobbig han är']
    test_targets = [model.emotions[0], model.emotions[0],
                    model.emotions[2], model.emotions[1], model.emotions[2]]
    # ===============================

    # Extract data
    df_anforanden = database.get_data_table('anforandetext')
    anforande_texts = df_anforanden[0]['anforandetext']
    # Build a pipeline

    # TODO: Extract test_sentances from database & enter them into pipeline

    text_clf = model.building_pipeline(
        SGDClassifier, test_sentances=test_sentances, test_targets=test_targets)

    # train the classifier
    text_clf.fit(model.training, model.train_target)

    # testing classifier
    docs_test = model.testing
    predicted = text_clf.predict(docs_test)
    # result
    res = test.test_classification(predicted)
    print(res)

    # TODO: Write predicted above to database


if __name__ == '__main__':
    main()
